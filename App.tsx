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
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Text>Hello World!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default App
