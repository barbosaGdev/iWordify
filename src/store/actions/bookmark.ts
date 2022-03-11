import { Action } from '../action.type'
import { BookmarkActions } from '../actionTypes/bookmark'

export const addBookmark = (word: string): Action<BookmarkActions> => ({
	type: BookmarkActions.ADD_BOOKMARK,
	payload: {
		newWord: word
	}
})

export const removeBookmark = (word: string): Action<BookmarkActions> => ({
	type: BookmarkActions.REMOVE_BOOKMARK,
	payload: {
		removedWord: word
	}
})

export const fetchBookmark = (word: string): Action<BookmarkActions> => ({
	type: BookmarkActions.FETCH_BOOKMARK,
	payload: {
		word
	}
})

export const fetchBookmarks = () => ({
	type: BookmarkActions.FETCH_BOOKMARKS
})
