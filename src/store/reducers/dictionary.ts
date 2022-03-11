import { Action } from '../action.type'
import { DictionaryActions } from '../actionTypes/dictionary'

export interface DictionaryState {
	wordsStartingWithA: string[]
	wordsStartingWithE: string[]
	wordsStartingWithI: string[]
	wordsStartingWithO: string[]
	wordsStartingWithU: string[]
}

export const initialState: DictionaryState = {
	wordsStartingWithA: [],
	wordsStartingWithE: [],
	wordsStartingWithI: [],
	wordsStartingWithO: [],
	wordsStartingWithU: []
}

export default (
	state = initialState,
	{ type, payload }: Action<DictionaryActions>
): DictionaryState => {
	switch (type) {
		case DictionaryActions.FETCH_WORDS_BY_VOWEL:
			return {
				...state,
				[payload.vowelsState]: payload.words
			}
		default:
			return state
	}
}
