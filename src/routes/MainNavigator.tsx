import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens'
import { useSelector } from 'react-redux'
import { DefaultRootState } from '../store'
import { DrawerNavigator, DrawerNavigatorParamsList } from './DrawerNavigator'
import { NavigatorScreenParams } from '@react-navigation/native'

export type MainNavigatorParamsList = {
	Login: undefined
	DrawerNavigator: NavigatorScreenParams<DrawerNavigatorParamsList>
}

const { Navigator, Screen } =
	createNativeStackNavigator<MainNavigatorParamsList>()

export const MainNavigator: FC = () => {
	const userToken = useSelector<DefaultRootState>((state) => state.auth.token)

	return (
		<Navigator screenOptions={{ headerShown: false }}>
			{!userToken ? (
				<Screen name='Login' component={Login} />
			) : (
				<Screen name='DrawerNavigator' component={DrawerNavigator} />
			)}
		</Navigator>
	)
}
