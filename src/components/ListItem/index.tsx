import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { addBookmark, removeBookmark } from '../../store/actions/bookmark'
import { BookmarkActions } from '../../store/actionTypes/bookmark'

export const ListItem: FC<{
	item: string
	seeAboutWord: (word: string) => void
	isBookmark?: boolean
}> = ({ item, seeAboutWord, isBookmark }) => {
	const dispatch = useDispatch()

	const onBookmarkPress = (word: string, action: string) => {
		dispatch(!isBookmark ? addBookmark(word) : removeBookmark(word))
	}

	return (
		<View style={styles.listItem}>
			<Text>{item}</Text>
			<View style={styles.icons}>
				{isBookmark ? (
					<TouchableOpacity
						onPress={() =>
							onBookmarkPress(item, BookmarkActions.REMOVE_BOOKMARK)
						}
					>
						<Icon name='star' size={18} color={'orange'} />
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						onPress={() => onBookmarkPress(item, BookmarkActions.ADD_BOOKMARK)}
					>
						<Icon name='staro' size={18} color={'orange'} />
					</TouchableOpacity>
				)}

				<TouchableOpacity onPress={() => seeAboutWord(item)}>
					<Icon name='eye' size={18} color={'darkblue'} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
