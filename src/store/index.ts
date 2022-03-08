import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import { auth as authReducer } from './reducers'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const appPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	whitelist: ['token']
}

const rootReducers = combineReducers({
	auth: persistReducer(appPersistConfig, authReducer)
})

export type DefaultRootState = ReturnType<typeof rootReducers>

const reducers: typeof rootReducers = (state, action) => {
	return rootReducers(state, action)
}

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const persistor = persistStore(store)

export { persistor, store }
