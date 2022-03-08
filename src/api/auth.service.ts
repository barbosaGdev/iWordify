import { signIn } from '../store/actions/auth'
import user from './user.json'

type AuthInput = {
	credential: string
	password: string
}

export const authentication = (authParams: AuthInput) => {
	const { credential, password } = authParams

	const validCredential =
		credential === user.email || credential === user.username

	if (!validCredential) {
		console.log('Wrong crendential')
	} else if (password !== user.password) {
		console.log('Unauthorized')
	} else {
		signIn('newJwtToken')
	}
}
