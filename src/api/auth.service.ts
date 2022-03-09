import { signIn } from '../store/actions/auth'
import user from './user.json'

export type AuthInput = {
	credential: string
	password: string
}

export type AuthErrors = {
	status?: number
	field?: string
	message?: string
}

export const authentication = (authParams: AuthInput): string | number => {
	const { credential, password } = authParams

	const validCredential =
		credential === user.email || credential === user.username

	if (!validCredential || password !== user.password) {
		return 401
	} else {
		return 'newJwtToken'
	}
}
