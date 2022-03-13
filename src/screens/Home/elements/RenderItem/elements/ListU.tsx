import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ListItem } from '../../../../../components'
import { DefaultRootState } from '../../../../../store'
import styles from '../../../styles'
import { ItemProps } from '..'
import { BookmarkState } from '../../../../../store/reducers/bookmark'

export const ListU: FC<ItemProps> = ({ item, dimensions, seeAboutWord }) => {
	const wordsStartingWithU = useSelector<DefaultRootState, string[]>(
		(state) => state.dictionary.wordsStartingWithU
	)

	const bookmarks = useSelector<DefaultRootState, string[]>(
		(state: { bookmark: BookmarkState }) => state.bookmark.bookmarks
	)

	return (
		<View style={{ width: dimensions?.width }}>
			<FlatList
				data={wordsStartingWithU}
				renderItem={(props) => (
					<ListItem
						{...props}
						seeAboutWord={seeAboutWord}
						isBookmark={bookmarks.includes(props.item)}
					/>
				)}
				keyExtractor={(_, index) => `${index}`}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
