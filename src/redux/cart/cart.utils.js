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
