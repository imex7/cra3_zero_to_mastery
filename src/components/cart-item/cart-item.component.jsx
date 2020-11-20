import React from 'react';
import './cart-item.styles.scss';

export const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
	return <>
		<div className="cart-item">
			<img src={imageUrl} alt="Item"/>
			<div className="item-details">
				<span className="className">{name}</span>
				<span className="price">{quantity} x ${price}</span>
			</div>
		</div>
	</>
};
