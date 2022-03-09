import { Action } from '../action.type'
import { AuthActions } from '../actionTypes/auth'

export interface AuthState {
	username: string
	token: string
}

export const initialState: AuthState = {
	username: '',
	token: ''
}

export default (
	state = initialState,
	{ type, payload }: Action<AuthActions>
): AuthState => {
	switch (type) {
		case AuthActions.SIGN_IN:
			return {
				...state,
				username: payload.username,
				token: payload.token
			}
		case AuthActions.SIGN_OUT:
			return {
				...initialState
			}
		default:
			return state
	}
}
