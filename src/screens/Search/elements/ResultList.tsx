import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import styles from '../styles'
import { RenderItem } from './RenderItem'

export const ResultList: FC = () => {
	return (
		<FlatList
			style={{ width: '100%' }}
			data={['resultOne', 'resultTwo', 'resultThree']}
			renderItem={RenderItem}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
		/>
	)
}
