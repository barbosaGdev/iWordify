import { DictionaryActions } from '../actionTypes/dictionary'
import * as API from '../../api/dictionary'

export const fetchWordsByVowel = (vowel: string) => async (dispatch: any) => {
	dispatch({
		type: DictionaryActions.FETCH_WORDS_BY_VOWEL,
		payload: {
			words: await API.getWordsByVowel(vowel)
		}
	})
}
