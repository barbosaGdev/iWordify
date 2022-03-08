import { Action } from '../action.type'
import { AuthActions } from '../actionTypes/auth'

export const signIn = (token: string): Action<AuthActions> => ({
	type: AuthActions.SIGN_IN,
	payload: {
		token
	}
})

export const signOut = (): Action<AuthActions> => ({
	type: AuthActions.SIGN_OUT
})
