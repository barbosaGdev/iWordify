import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens'

export type MainNavigatorParamsList = {
	Login: undefined
}

const { Navigator, Screen } =
	createNativeStackNavigator<MainNavigatorParamsList>()

export const MainNavigator: FC = () => {
	return (
		<Navigator initialRouteName='Login'>
			<Screen name='Login' component={Login} />
		</Navigator>
	)
}
