import { WordBody } from '../../api/dictionary'
import { Action } from '../action.type'
import { DictionaryActions } from '../actionTypes/dictionary'

export type ResponseWordsAPI = {
	query: {
		page: number
		limit: number
	}
	results: {
		data: string[]
		total: number
	}
}
export interface DictionaryState {
	wordsStartingWithA: ResponseWordsAPI
	wordsStartingWithE: ResponseWordsAPI
	wordsStartingWithI: ResponseWordsAPI
	wordsStartingWithO: ResponseWordsAPI
	wordsStartingWithU: ResponseWordsAPI
	word: WordBody[]
}

export const initialState: DictionaryState = {
	wordsStartingWithA: {
		query: {
			page: 1,
			limit: 10
		},
		results: {
			data: [],
			total: 0
		}
	},
	wordsStartingWithE: {
		query: {
			page: 1,
			limit: 10
		},
		results: {
			data: [],
			total: 0
		}
	},
	wordsStartingWithI: {
		query: {
			page: 1,
			limit: 10
		},
		results: {
			data: [],
			total: 0
		}
	},
	wordsStartingWithO: {
		query: {
			page: 1,
			limit: 10
		},
		results: {
			data: [],
			total: 0
		}
	},
	wordsStartingWithU: {
		query: {
			page: 1,
			limit: 10
		},
		results: {
			data: [],
			total: 0
		}
	},
	word: []
}

export default (
	state = initialState,
	{ type, payload }: Action<DictionaryActions>
): DictionaryState => {
	switch (type) {
		case DictionaryActions.FETCH_WORDS_BY_VOWEL:
			const currentLimit = Number(
				(
					state[
						payload.vowelsState as keyof DictionaryState
					] as ResponseWordsAPI
				).query.limit
			)

			return {
				...state,
				[payload.vowelsState]: {
					...payload.words,
					results: { ...payload.words.results, total: 50 },
					query: {
						...payload.words.query,
						limit: currentLimit + payload.limit
					}
				}
			}
		case DictionaryActions.FETCH_WORD:
			return {
				...state,
				word: payload.word
			}
		case DictionaryActions.RESET_WORD_STATE:
			return {
				...state,
				word: []
			}
		default:
			return state
	}
}
