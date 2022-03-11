import React, { FC } from 'react'
import { View, TextInput } from 'react-native'
import { InputProps } from '../../screens/Login'
import styles from './styles'

export const CredentialInput: FC<InputProps> = ({ handleChange }) => (
	<View style={styles.container}>
		<TextInput
			onChangeText={(text) => handleChange('credential', text)}
			placeholder='E-mail or username'
		/>
	</View>
)
