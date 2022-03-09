import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	contentContainer: {
		alignItems: 'center'
	},
	button: {
		marginTop: 12,
		backgroundColor: 'darkblue',
		width: 300,
		padding: 8
	},
	title: {
		fontSize: 24,
		color: '#000',
		fontWeight: 'bold'
	},
	inputs: {
		borderWidth: 1,
		borderColor: 'gray',
		width: 300,
		marginTop: 12
	},
	helperText: {
		color: 'red',
		width: 300
	},
	buttonText: {
		color: 'white',
		textAlign: 'center'
	},
	errorText: {
		color: 'red',
		fontSize: 16
	}
})
