/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './src/routes'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<StatusBar barStyle={'dark-content'} />
					<MainNavigator />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}

export default App
