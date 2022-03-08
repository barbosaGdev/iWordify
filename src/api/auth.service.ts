import { signIn } from '../store/actions/auth'
import user from './user.json'

export type AuthInput = {
	credential: string
	password: string
}

export const authentication = (authParams: AuthInput): string | null => {
	const { credential, password } = authParams

	const validCredential =
		credential === user.email || credential === user.username

	if (!validCredential) {
		console.log('Wrong crendential')
		return null
	} else if (password !== user.password) {
		console.log('Unauthorized')
		return null
	} else {
		return 'newJwtToken'
	}
}
