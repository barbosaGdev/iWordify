import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	searchBox: {
		borderWidth: 1,
		borderColor: 'gray',
		width: 360,
		marginTop: 12,
		marginBottom: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 12
	},
	resultList: {},
	itemSeparator: {
		marginVertical: 8
	}
})
