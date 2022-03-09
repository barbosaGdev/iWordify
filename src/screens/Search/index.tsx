import React, { FC } from 'react'
import { View, TextInput, Image, Text } from 'react-native'
import { ResultList } from './elements/ResultList'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Search: FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.searchBox}>
				<TextInput style={{ width: '90%' }} placeholder={'Search word...'} />
				<Icon name='search' size={18} />
			</View>

			<ResultList />
		</View>
	)
}
