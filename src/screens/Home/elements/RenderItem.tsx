import React, { FC, useEffect } from 'react'
import { FlatList, LayoutRectangle, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '../../../components'
import { DefaultRootState } from '../../../store'
import { fetchWordsByVowel } from '../../../store/actions/dictionary'
import styles from '../styles'

export type ItemProps = {
	item: string
	index: number
	dimensions?: Partial<LayoutRectangle>
	seeAboutWord: (word: string) => void
}

export const RenderItem: FC<ItemProps> = ({ item, dimensions, seeAboutWord }) => {
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
				renderItem={(props) => (
					<ListItem {...props} seeAboutWord={seeAboutWord} />
				)}
				keyExtractor={(item) => item}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
