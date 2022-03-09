import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ItemProps } from '../../screens/Home/elements/RenderItem'
import styles from './styles'

export const ListItem: FC<ItemProps> = ({ item }) => {
	return (
		<View style={styles.listItem}>
			<Text>{item}</Text>
			<Text>See</Text>
		</View>
	)
}
