import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, LayoutRectangle, ViewToken } from 'react-native'
import { Menu } from '../../components/Menu'
import viewabilityConfig from '../../utils/viewabilityConfig'
import { RenderItem } from './elements/RenderItem'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { fetchWordsByVowel } from '../../store/actions/dictionary'

export const vowels = ['A', 'E', 'I', 'O', 'U']

export const Home: FC = () => {
	const [indexPage, setIndexPage] = useState<number | null>(0)
	const [dimensions, setDimensions] = useState<Partial<LayoutRectangle>>({})

	const { navigate } = useNavigation()

	const dispatch = useDispatch()

	const seeAboutWord = (word: string): void => {
		//@ts-ignore
		navigate('Word', { word })
	}

	const flatListRef = useRef<FlatList>(null)

	const getItemLayout = (data: any, index: number) => ({
		length: dimensions?.width! || 0,
		offset: dimensions?.width! * index || 0,
		index
	})

	const onViewableItemsChanged = async ({
		changed
	}: {
		changed: Array<ViewToken>
	}) => {
		const [actualPostBeingShown] = changed
		const index = actualPostBeingShown.index

		dispatch(fetchWordsByVowel(vowels[index!]))
		setIndexPage(index)
	}

	const viewabilityConfigCallbackPairs = useRef([
		{ onViewableItemsChanged, viewabilityConfig }
	])

	return (
		<View
			onLayout={({ nativeEvent: { layout } }) => {
				setDimensions(layout)
			}}
			style={styles.container}
		>
			<Menu
				vowels={vowels}
				flatListRef={flatListRef}
				indexPage={indexPage}
				setIndexPage={setIndexPage}
			/>

			<FlatList
				data={vowels}
				ref={flatListRef}
				viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
				pagingEnabled
				renderItem={(props) => (
					<RenderItem
						{...props}
						dimensions={dimensions}
						seeAboutWord={seeAboutWord}
					/>
				)}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item}
				getItemLayout={getItemLayout}
				horizontal
			/>
		</View>
	)
}
