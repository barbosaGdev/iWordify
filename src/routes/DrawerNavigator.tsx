import React, { FC } from 'react'
import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList
} from '@react-navigation/drawer'
import { Home, Bookmarks, Word } from '../screens'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../store/actions/auth'
import { DefaultRootState } from '../store'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchID from 'react-native-touch-id'

export type DrawerNavigatorParamsList = {
	Home: undefined
	Bookmarks: undefined
	Rate: undefined
	Logout: undefined
	Word: {
		word: string
		onBookmarkPress: (word: string) => void
		isBookmark?: boolean
	}
}

const { Navigator, Screen } = createDrawerNavigator<DrawerNavigatorParamsList>()

export const DrawerNavigator: FC = () => {
	const dispatch = useDispatch()

	const user = useSelector<
		DefaultRootState,
		{ username: string; token: string }
	>((state) => state.auth)

	const onPressBookmarks = ({ navigation }: DrawerContentComponentProps) => {
		const config = {
			sensorDescription: 'To access your bookmarks!',
			sensorErrorDescription: 'Unauthorized'
		}

		TouchID.authenticate('Bookmarks', config)
			.then(() => {
				navigation.navigate('Bookmarks')
			})
			.catch(() => {})
	}

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
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon
							name='person'
							size={12}
							color='white'
							style={{ marginRight: 4 }}
						/>
						<Text style={{ color: 'white', fontSize: 12, marginRight: 8 }}>
							{user.username}
						</Text>
					</View>
				),
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
						label='Bookmarks'
						onPress={() => onPressBookmarks(props)}
					/>

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
			<Screen
				name='Bookmarks'
				component={Bookmarks}
				options={{
					drawerLabel: () => null,
					drawerIcon: () => null,
					drawerItemStyle: { height: 0, marginTop: -12 }
				}}
			/>
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
