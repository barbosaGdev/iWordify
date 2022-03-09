import { Action } from '../action.type'
import { BookmarkActions } from '../actionTypes/bookmark'

export const addBookmark = (word?: string): Action<BookmarkActions> => ({
	type: BookmarkActions.ADD_BOOKMARK,
	payload: {
		newWord: word
	}
})

export const fetchBookmarks = () => ({
	type: BookmarkActions.FETCH_BOOKMARKS
})
