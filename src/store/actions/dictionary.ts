import { Action } from '../action.type'
import { DictionaryActions } from '../actionTypes/dictionary'
import * as dictionaryService from '../../api/dictionary.service'

export const fetchWordsByVowel = (
	vowel?: string
): Action<DictionaryActions> => {
	const words = dictionaryService.getWordsByVowel()

	return {
		type: DictionaryActions.FETCH_WORDS_BY_VOWEL,
		payload: {
			words
		}
	}
}
