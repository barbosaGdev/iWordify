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

export const authentication = (
	authParams: AuthInput
): { username: string; token: string } | any => {
	const { credential, password } = authParams

	const validCredential =
		credential === user.email || credential === user.username

	if (!validCredential || password !== user.password) {
		return false
	} else {
		return { username: user.username, token: 'fakeJwtToken' }
	}
}
