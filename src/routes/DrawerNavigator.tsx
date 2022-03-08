import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home, Search, Rate } from '../screens'

export type MainNavigatorParamsList = {
	Home: undefined
	Search: undefined
	Rate: undefined
}

const { Navigator, Screen } = createDrawerNavigator()

export const DrawerNavigator: FC = () => {
	return (
		<Navigator initialRouteName='Home'>
			<Screen name='Home' component={Home} />
			<Screen name='Search' component={Search} />
			<Screen name='Rate' component={Rate} />
		</Navigator>
	)
}
