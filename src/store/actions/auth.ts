import { Action } from '../action.type'
import { AuthActions } from '../actionTypes/auth'

export const signIn = (
	username: string,
	token: string
): Action<AuthActions> => ({
	type: AuthActions.SIGN_IN,
	payload: {
		username,
		token
	}
})

export const signOut = (): Action<AuthActions> => ({
	type: AuthActions.SIGN_OUT
})
