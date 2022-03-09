import React, { FC } from 'react'
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList
} from '@react-navigation/drawer'
import { Home, Bookmarks, Word } from '../screens'
import { useDispatch } from 'react-redux'
import { signOut } from '../store/actions/auth'

export type DrawerNavigatorParamsList = {
	Home: undefined
	Bookmarks: undefined
	Rate: undefined
	Logout: undefined
	Word: {
		word: string
	}
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
			<Screen name='Bookmarks' component={Bookmarks} />
			<Screen
				name='Word'
				component={Word}
				options={{
					drawerLabel: () => null,
					drawerIcon: () => null,
					drawerItemStyle: { height: 0 },
					headerShown: false
				}}
			/>
		</Navigator>
	)
}
