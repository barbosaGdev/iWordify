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
			state.bookmarks.push(payload.newWord)

			return {
				...state
			}
		case BookmarkActions.FETCH_BOOKMARKS:
			return {
				...state
			}
		default:
			return state
	}
}
