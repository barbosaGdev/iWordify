import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginVertical: 32
	},
	contentContainer: {
		alignItems: 'center'
	},
	button: {
		marginTop: 12,
		backgroundColor: 'darkblue',
		width: 350,
		padding: 8
	},
	title: {
		fontSize: 24,
		color: '#000',
		fontWeight: 'bold',
		marginVertical: 24
	},
	inputs: {
		borderWidth: 1,
		borderColor: 'gray',
		width: 350,
		marginTop: 12
	},
	helperText: {
		color: 'red',
		width: 350
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
