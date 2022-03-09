import React, { FC } from 'react'
import { Text, View } from 'react-native'

type ItemProps = {
	item: string
}

export const RenderItem: FC<ItemProps> = ({ item }) => {
	return (
		<View style={{ marginLeft: 26 }}>
			<Text>{item}</Text>
		</View>
	)
}
