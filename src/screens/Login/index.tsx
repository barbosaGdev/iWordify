import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthErrors, AuthInput, authentication } from '../../api/auth'
import { CredentialInput } from '../../components/CredentialInput'
import { PasswordInput } from '../../components/PasswordInput'
import { signIn } from '../../store/actions/auth'
import styles from './styles'

export type InputProps = {
	handleChange: (field: string, text: string) => void
}

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
		const user = authentication(authInput)

		if (user) {
			dispatch(signIn(user.username, user.token))
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

				<CredentialInput handleChange={handleChange} />

				{errors?.field === 'credential' && (
					<Text style={styles.helperText}>{errors?.message}</Text>
				)}

				<PasswordInput handleChange={handleChange} />

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
		</View>
	)
}
