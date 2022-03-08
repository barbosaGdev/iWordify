import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens'
import { useSelector } from 'react-redux'
import { DefaultRootState } from '../store'
import { DrawerNavigator } from './DrawerNavigator'

export type MainNavigatorParamsList = {
	Login: undefined
}

const { Navigator, Screen } =
	createNativeStackNavigator<MainNavigatorParamsList>()

export const MainNavigator: FC = () => {
	const userToken = useSelector<DefaultRootState>((state) => state.auth.token)

	return !userToken ? (
		<Navigator initialRouteName='Login'>
			<Screen name='Login' component={Login} />
		</Navigator>
	) : (
		<DrawerNavigator />
	)
}
