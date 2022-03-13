import { Action } from '../action.type'
import { BookmarkActions } from '../actionTypes/bookmark'

export interface BookmarkState {
	bookmarks: string[]
}

export const initialState: BookmarkState = {
	bookmarks: []
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

		case BookmarkActions.FETCH_BOOKMARKS:
			return {
				...state,
				bookmarks: state.bookmarks
			}
		default:
			return state
	}
}
