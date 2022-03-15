/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './src/routes'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store'
import TouchID from 'react-native-touch-id'

const App = () => {
	useEffect(() => {
		TouchID.isSupported()
			.then(() => {
				console.log('TOUCH ID IS WORKING!')
			})
			.catch(() => {
				console.log('TOUCH ID NOT SUPPORTED')
			})
	}, [])

	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar barStyle={'dark-content'} />
				<MainNavigator />
			</NavigationContainer>
		</Provider>
	)
}

export default App
