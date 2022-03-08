import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'
import { authentication, AuthInput } from '../api/auth.service'
import { signIn } from '../store/actions/auth'

export const Login: FC = () => {
	const [authInput, setAuthInput] = useState<AuthInput>({
		credential: '',
		password: ''
	})

	const dispatch = useDispatch()

	const handleChange = (field: string, text: string) => {
		setAuthInput({ ...authInput, [field]: text })
	}

	const handleSubmit = () => {
		const userToken = authentication(authInput)

		userToken ? dispatch(signIn(userToken)) : console.log('error')
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
				<TextInput
					onChangeText={(text) => handleChange('password', text)}
					style={styles.inputs}
					placeholder='Password'
				/>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={{ color: 'white', textAlign: 'center' }}>Access</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text>Use fingerprint</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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
	}
})
