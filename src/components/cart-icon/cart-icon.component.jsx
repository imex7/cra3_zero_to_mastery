import React from 'react';
import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleHidden, itemCount }) {
	return <>
		<div className="cart-icon" onClick={toggleHidden}>
			<ShopingIcon className='shopping-icon' />
			<span className="item-count">{itemCount}</span>
		</div>
	</>
}

const msp = createStructuredSelector({
		itemCount: selectCartItemsCount
})

const mdp = (dispatch) => ({
	toggleHidden: () => {
		return dispatch(toggleCartHidden())
	}
})

export default connect(msp, mdp)(CartIcon)