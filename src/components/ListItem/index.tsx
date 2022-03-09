import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ItemProps } from '../../screens/Home/elements/RenderItem'
import { useDispatch } from 'react-redux'
import { addBookmark } from '../../store/actions/bookmark'

export const ListItem: FC<ItemProps> = ({ item, seeAboutWord }) => {
	const dispatch = useDispatch()

	const onBookmarkPress = (word: string) => {
		dispatch(addBookmark(word))
	}

	return (
		<View style={styles.listItem}>
			<Text>{item}</Text>
			<View>
				<TouchableOpacity onPress={() => onBookmarkPress(item)}>
					<Icon name='star' size={18} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => seeAboutWord(item)}>
					<Icon name='eye' size={18} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
