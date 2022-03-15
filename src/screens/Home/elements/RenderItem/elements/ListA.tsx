import React, { FC, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '../../../../../components'
import { DefaultRootState } from '../../../../../store'
import styles from '../../../styles'
import { ItemProps } from '..'
import { BookmarkState } from '../../../../../store/reducers/bookmark'
import { fetchWordsByVowel } from '../../../../../store/actions/dictionary'
import { ResponseWordsAPI } from '../../../../../store/reducers/dictionary'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ListFooterComponent from './ListFooterComponent'

export const ListA: FC<ItemProps> = ({ item, dimensions, seeAboutWord }) => {
	const dispatch = useDispatch()

	const {
		query: { limit },
		results: { data, total }
	} = useSelector<DefaultRootState, ResponseWordsAPI>(
		(state) => state.dictionary.wordsStartingWithA
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
