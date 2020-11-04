import { UserActionTypes } from './user.types';

const initial_state = {
	currentUser: null
}

export default function userReducer(state = initial_state, action) {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
		default:
			return state
	}
};
