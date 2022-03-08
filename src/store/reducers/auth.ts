import { Action } from '../action.type'
import { AuthActions } from '../actionTypes/auth'

export interface AuthState {
	token: string
}

export const initialState: AuthState = {
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
