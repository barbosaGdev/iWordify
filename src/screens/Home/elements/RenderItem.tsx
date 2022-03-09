import React, { FC, useEffect } from 'react'
import { FlatList, LayoutRectangle, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '../../../components'
import { DefaultRootState } from '../../../store'
import { fetchWordsByVowel } from '../../../store/actions/dictionary'

export type ItemProps = {
	item: string
	index: number
	dimensions?: Partial<LayoutRectangle>
}

export const RenderItem: FC<ItemProps> = ({ item, dimensions }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchWordsByVowel(item))
	}, [item])

	const words = useSelector<DefaultRootState, string[]>(
		(state) => state.dictionary.words
	)

	return (
		<View style={{ width: dimensions?.width }}>
			<FlatList
				data={words}
				renderItem={ListItem}
				keyExtractor={(item) => item}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
