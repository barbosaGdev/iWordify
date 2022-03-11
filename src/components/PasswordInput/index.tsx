import React, { FC, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { InputProps } from '../../screens/Login'
import styles from './styles'

export const PasswordInput: FC<InputProps> = ({ handleChange }) => {
	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

	return (
		<View style={styles.container}>
			<TextInput
				secureTextEntry={hiddenPassword}
				onChangeText={(text) => handleChange('password', text)}
				placeholder='Password'
			/>

			<TouchableOpacity onPress={() => setHiddenPassword(!hiddenPassword)}>
				{hiddenPassword ? (
					<Icon name='eye' size={20} />
				) : (
					<Icon name='eyeo' size={20} />
				)}
			</TouchableOpacity>
		</View>
	)
}
