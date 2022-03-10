import { Action } from '../action.type'
import { DictionaryActions } from '../actionTypes/dictionary'

export interface DictionaryState {
	words: string[]
}

export const initialState: DictionaryState = {
	words: []
}

export default (
	state = initialState,
	{ type, payload }: Action<DictionaryActions>
): DictionaryState => {
	switch (type) {
		case DictionaryActions.FETCH_WORDS_BY_VOWEL:
			return {
				...state,
				words: payload.words
			}
		default:
			return state
	}
}
