import React, { FC } from 'react'
import { Text, View } from 'react-native'

export const ListEmptyComponent: FC = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Don't have any bookmarks</Text>
		</View>
	)
}
