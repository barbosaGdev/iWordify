import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
	show: boolean
	fetchMore: () => void
}

const ListFooterComponent: FC<Props> = ({ show, fetchMore }) =>
	show ? (
		<View style={{ paddingVertical: 24 }} />
	) : (
		<TouchableOpacity
			style={{ alignItems: 'center', paddingVertical: 24 }}
			onPress={fetchMore}
		>
			<Text style={{fontWeight: 'bold'}}>Get more 10</Text>
		</TouchableOpacity>
	)

export default ListFooterComponent
