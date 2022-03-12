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

export const fetchWord = (word: string) => async (dispatch: any) => {
	dispatch({
		type: DictionaryActions.FETCH_WORD,
		payload: {
			word: await API.getWord(word)
		}
	})
}

export const resetWordState = () => ({
	type: DictionaryActions.RESET_WORD_STATE
})
