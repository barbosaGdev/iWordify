import React, { useRef, useState } from 'react'
import { View, Text, FlatList, LayoutRectangle, ViewToken } from 'react-native'
import { Menu } from '../../components/Menu'
import viewabilityConfig from '../../utils/viewabilityConfig'
import { RenderItem } from './elements/RenderItem'
import styles from './styles'

const vowels = ['A', 'E', 'I', 'O', 'U']

export const Home = () => {
	const [indexPage, setIndexPage] = useState<number | null>(0)
	const [dimensions, setDimensions] = useState<Partial<LayoutRectangle>>({})

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
					<RenderItem {...props} dimensions={dimensions} />
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
