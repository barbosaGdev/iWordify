import React, { FC } from 'react'
import { View, StatusBar, Text, StyleSheet } from 'react-native'

export const Login: FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Text>Login page</Text>
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
