/*eslint-disable*/
import React from 'react';
import './header.styles.scss'
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles"
import { signOutStart } from '../../redux/user/user.actions'

function Header({currentUser, hidden, signOutStart}) {
	let history = useHistory();
	return <>
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{
					currentUser
						? <OptionLink
								as='div'
								className="option"
								onClick={signOutStart}
							>
								SIGNOUT
							</OptionLink>
						: <OptionLink 
								className="option"
								to="/signin"
							>
								SIGN IN
							</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{ hidden 
					? null
					: <CartDropdown />
			}
		</HeaderContainer>
	</>
};

const msp = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

const mdp = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(msp, mdp)(Header)
