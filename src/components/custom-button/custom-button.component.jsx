import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({caption, isGoogleSignIn, inverted, ...other}) => (
	<button className={`
		${inverted ? 'inverted' : ''} 
		${isGoogleSignIn ? 'google-sign-in': '' } 
		custom-button`} {...other}>
		{caption}
	</button>
)
