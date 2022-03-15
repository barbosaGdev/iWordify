import React, { FC } from 'react'
import { Text, View } from 'react-native'

export const ListEmptyComponent: FC<{ invalidTouchId: boolean }> = ({
	invalidTouchId
}) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>
				{!invalidTouchId
					? "Don't have any bookmarks"
					: "You don't have access to this"}
			</Text>
		</View>
	)
}
