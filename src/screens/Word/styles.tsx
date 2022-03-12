import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: { flex: 1 },
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 12,
		borderBottomWidth: 1,
		borderColor: '#ccc'
	},
	subtitle: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'darkblue'
	}
})
