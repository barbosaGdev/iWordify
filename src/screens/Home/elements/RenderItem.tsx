import React, { FC } from 'react'
import { FlatList, LayoutRectangle, View } from 'react-native'
import { ListItem } from '../../../components'
import styles from '../styles'

export type ItemProps = {
	item: string
	index: number
	dimensions?: Partial<LayoutRectangle>
}

export const RenderItem: FC<ItemProps> = ({ item, dimensions }) => {
	return (
		<View style={{ width: dimensions?.width }}>
			<FlatList data={['aOne', 'aTwo', 'aThree']} renderItem={ListItem} />
		</View>
	)
}
