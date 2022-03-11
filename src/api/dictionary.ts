import axios from 'axios'
import { API_HOST, API_KEY, API_URL } from '@env'

const headers = {
	'x-rapidapi-host': API_HOST,
	'x-rapidapi-key': API_KEY
}

export type PaginationArgs = {
	limit: number
	page: number
}

export const getWordsByVowel = async (
	vowel: string,
	paginationArgs?: PaginationArgs
) => {
	const response = await axios.get(`${API_URL}/`, {
		headers,
		params: {
			letterPattern: `^${vowel.toLowerCase()}.{2,}$`,
			limit: paginationArgs?.limit || 10,
			page: paginationArgs?.page || 1
		}
	})

	return response.data.results.data
}
