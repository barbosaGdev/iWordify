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
	},
	bookmarkButton: {
		marginTop: 12,
		backgroundColor: 'darkblue',
		padding: 8,
		width: 200,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})
