import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Rate, Search } from '../screens'

export type MainNavigatorParamsList = {
	Home: undefined
	Search: undefined
	Rate: undefined
}

const { Navigator, Screen } =
	createNativeStackNavigator<MainNavigatorParamsList>()

export const MainNavigator: FC = () => {
	return (
		<Navigator initialRouteName='Home'>
			<Screen name='Home' component={Home} />
			<Screen name='Search' component={Search} />
			<Screen name='Rate' component={Rate} />
		</Navigator>
	)
}
