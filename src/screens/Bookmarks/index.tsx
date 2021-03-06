import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import TouchID from 'react-native-touch-id'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem } from '../../components'
import { DefaultRootState } from '../../store'
import { fetchBookmarks } from '../../store/actions/bookmark'
import { BookmarkState } from '../../store/reducers/bookmark'
import { ListEmptyComponent } from './elements/ListEmptyComponent'
import styles from './styles'

export const Bookmarks: FC = () => {
	const dispatch = useDispatch()

	const { navigate } = useNavigation()

	const seeAboutWord = (
		word: string,
		onBookmarkPress: (word: string) => void,
		isBookmark?: boolean
	): void => {
		//@ts-ignore
		navigate('Word', { word, onBookmarkPress, isBookmark })
	}

	useEffect(() => {
		dispatch(fetchBookmarks())
	}, [])

	const bookmarks = useSelector<DefaultRootState, string[]>(
		(state: { bookmark: BookmarkState }) => state.bookmark.bookmarks
	)

	return (
		<View style={styles.container}>
			<Text
				style={{
					paddingVertical: 24,
					fontSize: 24,
					fontWeight: 'bold',
					color: 'darkblue'
				}}
			>
				Bookmarks
			</Text>

			<FlatList
				style={{ width: '100%' }}
				data={bookmarks}
				ListEmptyComponent={ListEmptyComponent}
				renderItem={(props) => (
					<ListItem
						{...props}
						seeAboutWord={seeAboutWord}
						isBookmark={bookmarks.includes(props.item)}
					/>
				)}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
			/>
		</View>
	)
}
