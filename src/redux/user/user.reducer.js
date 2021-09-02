import { UserActionTypes } from './user.types';

const initial_state = {
	currentUser: null,
	error: null
}

export default function userReducer(state = initial_state, action) {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			}
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			}
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
};
