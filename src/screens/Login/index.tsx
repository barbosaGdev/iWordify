import React, { FC, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthErrors, AuthInput, authentication } from '../../api/auth.service'
import { signIn } from '../../store/actions/auth'
import styles from './styles'

export const Login: FC = () => {
	const [errors, setErrors] = useState<AuthErrors>()

	const [authInput, setAuthInput] = useState<AuthInput>({
		credential: '',
		password: ''
	})

	const dispatch = useDispatch()

	const handleChange = (field: string, text: string) => {
		setAuthInput({ ...authInput, [field]: text })
		setErrors({})
	}

	const validateForm = () => {
		if (!authInput.credential) {
			setErrors({ field: 'credential', message: 'Required field' })
		} else if (!authInput.password) {
			setErrors({ field: 'password', message: 'Required field' })
		} else {
			handleSubmit()
		}
	}

	const handleSubmit = () => {
		const userToken = authentication(authInput)

		if (userToken !== 401) {
			dispatch(signIn(userToken.toString()))
		} else {
			setErrors({
				status: 401,
				message: 'Unauthorized'
			})
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>Log In iWordify</Text>
				<TextInput
					onChangeText={(text) => handleChange('credential', text)}
					style={styles.inputs}
					placeholder='E-mail or username'
				/>
				{errors?.field === 'credential' && (
					<Text style={styles.helperText}>{errors?.message}</Text>
				)}
				<TextInput
					secureTextEntry
					onChangeText={(text) => handleChange('password', text)}
					style={styles.inputs}
					placeholder='Password'
				/>

				{errors?.field === 'password' && (
					<Text style={styles.helperText}>{errors?.message}</Text>
				)}

				<TouchableOpacity style={styles.button} onPress={validateForm}>
					<Text style={styles.buttonText}>Access</Text>
				</TouchableOpacity>
			</View>

			{errors?.status === 401 && (
				<Text style={styles.errorText}>{errors.message}</Text>
			)}

			<View>
				<Text>Use fingerprint</Text>
			</View>
		</View>
	)
}
