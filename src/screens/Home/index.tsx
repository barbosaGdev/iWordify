import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, LayoutRectangle, ViewToken } from 'react-native'
import { Menu } from '../../components/Menu'
import viewabilityConfig from '../../utils/viewabilityConfig'
import RenderItem, { ItemProps } from './elements/RenderItem'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { fetchWordsByVowel } from '../../store/actions/dictionary'
import { DictionaryState } from '../../store/reducers/dictionary'

export type VowelsEntity = {
	vowel: string
	vowelsState: keyof DictionaryState
}

export const vowels: VowelsEntity[] = [
	{ vowel: 'A', vowelsState: 'wordsStartingWithA' },
	{ vowel: 'E', vowelsState: 'wordsStartingWithE' },
	{ vowel: 'I', vowelsState: 'wordsStartingWithI' },
	{ vowel: 'O', vowelsState: 'wordsStartingWithO' },
	{ vowel: 'U', vowelsState: 'wordsStartingWithU' }
]

export const Home: FC = () => {
	const [indexPage, setIndexPage] = useState<number | null>(0)
	const [dimensions, setDimensions] = useState<Partial<LayoutRectangle>>({})

	const dispatch = useDispatch()

	useEffect(() => {
		vowels.forEach(({ vowel, vowelsState }) => {
			dispatch(fetchWordsByVowel(vowel, vowelsState))
		})
	}, [])

	const { navigate } = useNavigation()

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

		setIndexPage(index)
	}

	const viewabilityConfigCallbackPairs = useRef([
		{ onViewableItemsChanged, viewabilityConfig }
	])

	const renderItem: FC<{ item: VowelsEntity; index: number }> = (props) => (
		<RenderItem
			{...props}
			dimensions={dimensions}
			seeAboutWord={seeAboutWord}
		/>
	)

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
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.vowel}
				getItemLayout={getItemLayout}
				horizontal
			/>
		</View>
	)
}
