import { Action } from '../action.type'
import { BookmarkActions } from '../actionTypes/bookmark'

export interface BookmarkState {
	bookmarks: string[]
	bookmarkExist: boolean
}

export const initialState: BookmarkState = {
	bookmarks: [],
	bookmarkExist: false
}

export default (
	state = initialState,
	{ type, payload }: Action<BookmarkActions>
): BookmarkState => {
	switch (type) {
		case BookmarkActions.ADD_BOOKMARK:
			return {
				...state,
				bookmarks: [...state.bookmarks, payload.newWord]
			}
		case BookmarkActions.REMOVE_BOOKMARK:
			return {
				...state,
				bookmarks: state.bookmarks.filter(
					(item) => item !== payload.removedWord
				)
			}
		case BookmarkActions.FETCH_BOOKMARK:
			return {
				...state,
				bookmarkExist: state.bookmarks.includes(payload.word)
			}
		case BookmarkActions.FETCH_BOOKMARKS:
			return {
				...state,
				bookmarks: state.bookmarks
			}
		default:
			return state
	}
}
