import React from 'react'
import { View, StatusBar, Text, StyleSheet } from 'react-native'

export const Search = () => {
	return (
		<View style={styles.container}>
			<Text>Search page</Text>
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
