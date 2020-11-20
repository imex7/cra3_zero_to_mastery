import React from 'react';
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
	return <>
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.length
						? cartItems.map((el) => <CartItem key={el.id} item={el} />)
						: <span className="empty-message">Корзина товаров пуста!!!</span>
				}
			</div>
			<CustomButton caption='GO TO CHECKOUT'
				onClick={
					() => {
						history.push('/checkout')
						dispatch(toggleCartHidden())
					}}
			/>
		</div>
	</>
};

const msp = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(msp)(CartDropdown))
