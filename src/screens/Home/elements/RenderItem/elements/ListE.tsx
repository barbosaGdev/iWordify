import React, { FC } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '../../../../../components'
import { DefaultRootState } from '../../../../../store'
import styles from '../../../styles'
import { ItemProps } from '..'
import { BookmarkState } from '../../../../../store/reducers/bookmark'
import { ResponseWordsAPI } from '../../../../../store/reducers/dictionary'
import { fetchWordsByVowel } from '../../../../../store/actions/dictionary'
import ListFooterComponent from './ListFooterComponent'

export const ListE: FC<ItemProps> = ({ item, dimensions, seeAboutWord }) => {
	const dispatch = useDispatch()

	const {
		query: { limit },
		results: { data, total }
	} = useSelector<DefaultRootState, ResponseWordsAPI>(
		(state) => state.dictionary.wordsStartingWithE
	)

	const bookmarks = useSelector<DefaultRootState, string[]>(
		(state: { bookmark: BookmarkState }) => state.bookmark.bookmarks
	)

	return (
		<View style={{ width: dimensions?.width }}>
			<FlatList
				data={data}
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
				ListEmptyComponent={() => <ActivityIndicator size={24} />}
				ListFooterComponent={() => (
					<ListFooterComponent
						show={!data || total <= data.length}
						fetchMore={() => {
							dispatch(
								fetchWordsByVowel(item.vowel, item.vowelsState, {
									limit
								})
							)
						}}
					/>
				)}
			/>
		</View>
	)
}
