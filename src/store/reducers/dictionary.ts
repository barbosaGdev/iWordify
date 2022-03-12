import { WordBody } from '../../api/dictionary'
import { Action } from '../action.type'
import { DictionaryActions } from '../actionTypes/dictionary'

export interface DictionaryState {
	wordsStartingWithA: string[]
	wordsStartingWithE: string[]
	wordsStartingWithI: string[]
	wordsStartingWithO: string[]
	wordsStartingWithU: string[]
	word: WordBody[]
}

export const initialState: DictionaryState = {
	wordsStartingWithA: [],
	wordsStartingWithE: [],
	wordsStartingWithI: [],
	wordsStartingWithO: [],
	wordsStartingWithU: [],
	word: []
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
		case DictionaryActions.FETCH_WORD:
			return {
				...state,
				word: payload.word
			}
		default:
			return state
	}
}
