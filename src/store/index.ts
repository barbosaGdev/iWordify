import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { auth as authReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
	auth: authReducer
})

export type DefaultRootState = ReturnType<typeof rootReducers>

const reducers: typeof rootReducers = (state, action) => {
	return rootReducers(state, action)
}

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export { store }
