import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({caption, isGoogleSignIn, ...other}) => (
	<button className={`${isGoogleSignIn ? "google-sign-in": "" } custom-button`} {...other}>
		{caption}
	</button>
)
