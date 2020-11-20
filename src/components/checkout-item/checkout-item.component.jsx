import React from 'react';
import './checkout-item.styles.scss'
import { connect } from 'react-redux';
import { addItem, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem}) => {
	let { name, imageUrl, price, quantity } = cartItem
	return <>
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item"/>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => {
					removeItem(cartItem)
				}}>&#10094;</div>
					<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => {
					addItem(cartItem)
				}}>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => {
				clearItem(cartItem)
			}}>&#10005;</div>
		</div>
	</>
}

const mdp = (dispatch) => {
	return {
		addItem: (item) => {
			return dispatch(addItem(item))
		},
		clearItem: (item) => {
			return dispatch(clearItemFromCart(item))
		},
		removeItem: (item) => {
			return dispatch(removeItemFromCart(item))
		}
	}
}

export default connect(null, mdp)(CheckoutItem);