import data from './shop.data';

const initial_state = {
	collections: data
}

const shopReducer = (state = initial_state, action) => {
	switch (action.type) {

		default:
			return state;
	}
}

export default shopReducer;