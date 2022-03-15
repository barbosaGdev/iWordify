import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { addBookmark, removeBookmark } from '../../store/actions/bookmark'

export const ListItem: FC<{
	item: string
	seeAboutWord: (
		word: string,
		onBookmarkPress: (word: string) => void,
		isBookmark?: boolean
	) => void
	isBookmark?: boolean
}> = ({ item, seeAboutWord, isBookmark }) => {
	const dispatch = useDispatch()

	const onBookmarkPress = (word: string) => {
		dispatch(!isBookmark ? addBookmark(word) : removeBookmark(word))
	}

	return (
		<View style={styles.listItem}>
			<Text>{item}</Text>
			<View style={styles.icons}>
				{isBookmark ? (
					<TouchableOpacity onPress={() => onBookmarkPress(item)}>
						<Icon name='star' size={18} color={'orange'} />
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => onBookmarkPress(item)}>
						<Icon name='staro' size={18} color={'orange'} />
					</TouchableOpacity>
				)}

				<TouchableOpacity
					onPress={() => seeAboutWord(item, onBookmarkPress, isBookmark)}
				>
					<Icon name='eye' size={18} color={'darkblue'} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
