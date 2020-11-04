import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const initial_state = {
	hidden: true,
	cartItems: []
}

export default function cartReducer(state = initial_state, action) {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		default:
			return state
	}
};