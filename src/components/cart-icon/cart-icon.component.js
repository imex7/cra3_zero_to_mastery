import React from 'react';
import './cart-icon.styles.scss'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartHidden}) {
	return <>
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShopingIcon className='shopping-icon' />
			<span className="item-count">0</span>
		</div>
	</>
}

// const mapStateToProps = ({ user }) => ({
// 	currentUser: user.currentUser
// })

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => {
		return dispatch(toggleCartHidden())
	}
})

export default connect(null, mapDispatchToProps)(CartIcon)