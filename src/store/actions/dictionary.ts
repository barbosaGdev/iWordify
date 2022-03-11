import { DictionaryActions } from '../actionTypes/dictionary'
import * as API from '../../api/dictionary'
import { DictionaryState } from '../reducers/dictionary'

export const fetchWordsByVowel =
	(vowel: string, vowelsState: keyof DictionaryState) =>
	async (dispatch: any) => {
		dispatch({
			type: DictionaryActions.FETCH_WORDS_BY_VOWEL,
			payload: {
				words: await API.getWordsByVowel(vowel),
				vowelsState
			}
		})
	}
