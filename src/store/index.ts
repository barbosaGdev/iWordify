import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {
	auth as authReducer,
	dictionary as dictionaryReducer,
	bookmark as bookmarkReducer
} from './reducers'
import thunk from 'redux-thunk'
import { AuthActions } from './actionTypes/auth'
import { initialState as authInitialState } from './reducers/auth'
import { initialState as dicitionaryInitialState } from './reducers/dictionary'
import { initialState as bookmarkInitialState } from './reducers/bookmark'

const rootReducers = combineReducers({
	auth: authReducer,
	dictionary: dictionaryReducer,
	bookmark: bookmarkReducer
})

export type DefaultRootState = ReturnType<typeof rootReducers>

const reducers: typeof rootReducers = (state, action) => {
	if (action.type === AuthActions.SIGN_OUT) {
		state = {
			auth: authInitialState,
			dictionary: dicitionaryInitialState,
			bookmark: bookmarkInitialState
		}
	}

	return rootReducers(state, action)
}

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export { store }
