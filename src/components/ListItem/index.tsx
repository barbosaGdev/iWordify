import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ItemProps } from '../../screens/Home/elements/RenderItem'

export const ListItem: FC<ItemProps> = ({ item, seeAboutWord }) => {
	return (
		<View style={styles.listItem}>
			<Text>{item}</Text>
			<TouchableOpacity onPress={() => seeAboutWord(item)}>
				<Icon name='eye' size={18} />
			</TouchableOpacity>
		</View>
	)
}
