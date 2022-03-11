import React, { FC, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultRootState } from '../../store'
import { fetchBookmarks } from '../../store/actions/bookmark'
import { BookmarkState } from '../../store/reducers/bookmark'
import { ListEmptyComponent } from './elements/ListEmptyComponent'
import { RenderItem } from './elements/RenderItem'
import styles from './styles'

export const Bookmarks: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchBookmarks())
	}, [])

	const bookmarks = useSelector<DefaultRootState, string[]>(
		(state: { bookmark: BookmarkState }) => state.bookmark.bookmarks
	)

	return (
		<View style={styles.container}>
			<Text>Bookmarks</Text>

			<FlatList
				style={{ width: '100%' }}
				data={bookmarks}
				ListEmptyComponent={ListEmptyComponent}
				renderItem={RenderItem}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
			/>
		</View>
	)
}
