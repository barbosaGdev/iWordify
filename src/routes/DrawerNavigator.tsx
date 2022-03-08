import React, { FC } from 'react'
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList
} from '@react-navigation/drawer'
import { Home, Search, Rate } from '../screens'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import { signOut } from '../store/actions/auth'

export type DrawerNavigatorParamsList = {
	Home: undefined
	Search: undefined
	Rate: undefined
	Logout: undefined
}

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigatorParamsList>()

export const DrawerNavigator: FC = () => {
	const dispatch = useDispatch()

	return (
		<Navigator
			screenOptions={{
				headerTitle: 'iWordify',
				headerStyle: {
					backgroundColor: 'darkblue'
				},
				headerTitleAlign: 'center',
				headerTitleStyle: {
					color: 'white'
				},
				headerTintColor: 'white',
				drawerStyle: {
					backgroundColor: 'darkblue'
				},
				drawerLabelStyle: {
					color: 'white'
				}
			}}
			drawerContent={(props) => (
				<DrawerContentScrollView {...props}>
					<DrawerItemList {...props} />
					<DrawerItem
						inactiveTintColor='white'
						activeTintColor='white'
						label='Logout'
						onPress={() => dispatch(signOut())}
					/>
				</DrawerContentScrollView>
			)}
		>
			<Screen name='Home' component={Home} />
			<Screen name='Search' component={Search} />
			<Screen name='Rate' component={Rate} />
		</Navigator>
	)
}
