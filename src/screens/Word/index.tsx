import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerNavigatorParamsList } from '../../routes/DrawerNavigator'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Word: FC = () => {
	const { goBack } = useNavigation()
	const { params } = useRoute<RouteProp<DrawerNavigatorParamsList, 'Word'>>()

	const { word } = params

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={goBack}>
					<Icon name='arrow-left' size={18} />
				</TouchableOpacity>
				<Text style={{ fontSize: 18 }}>{word}</Text>
				<View />
			</View>
		</View>
	)
}
