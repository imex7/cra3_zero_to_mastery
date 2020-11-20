import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart, clearItemFromCart } from './cart.utils';

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
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemToCart(state.cartItems, action.payload)
			}
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: clearItemFromCart(state.cartItems, action.payload)
			}
		default:
			return state
	}
};