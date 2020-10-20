import React from 'react';
import './signin-and-signup-page.styles.scss'
import { SignIn } from '../../components/sign-in/sign-in.component';
import { SignUp } from '../../components/sign-up/sign-up.component';

export default () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
)