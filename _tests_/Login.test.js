import React from 'react'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Login } from '../src/screens'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import {
	auth as authReducer,
	dictionary as dictionaryReducer,
	bookmark as bookmarkReducer
} from '../src/store/reducers'

const rootReducers = combineReducers({
	auth: authReducer,
	dictionary: dictionaryReducer,
	bookmark: bookmarkReducer
})

const reducers = (state, action) => {
	return rootReducers(state, action)
}

const store = createStore(reducers, compose(applyMiddleware(thunk)))

test('renders correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<Login />
			</Provider>
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
