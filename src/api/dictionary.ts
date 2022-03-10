import axios from 'axios'
import { API_HOST, API_KEY, API_URL } from '@env'

const headers = {
	'x-rapidapi-host': API_HOST,
	'x-rapidapi-key': API_KEY
}

export const getWordsByVowel = async (vowel: string) => {
	const response = await axios.get(
		`${API_URL}/?letterPattern=^${vowel.toLowerCase()}`,
		{ headers }
	)

	return response.data.results.data
}
