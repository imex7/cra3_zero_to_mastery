export const addItemToCart = (cartItems, cartitemToAdd) => {
	const existingCartItem = cartItems.find((el) => {
		return el.id === cartitemToAdd.id
	})
	if (existingCartItem) {
		return cartItems.map((el) => {
			return el.id === cartitemToAdd.id
				? {
					...el, quantity: el.quantity + 1
				}
				: el
		})
	}
	return [...cartItems, {...cartitemToAdd, quantity: 1}]
}

export const removeItemToCart = (cartItems, cartitemToRemove) => {
	if (cartitemToRemove.quantity === 1) {
		return cartItems.filter((el) => {
			return el.id !== cartitemToRemove.id
		})
	}
	return cartItems.map((el) => {
		return el.id === cartitemToRemove.id
			? {
				...el, quantity: el.quantity - 1
			}
			: el
	})
}

export const clearItemFromCart = (cartItems, cartitemToClear) => {
	return cartItems.filter((el) => {
		return el.id !== cartitemToClear.id
	})
}
