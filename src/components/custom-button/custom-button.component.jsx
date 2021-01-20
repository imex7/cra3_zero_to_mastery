import React from 'react';
import { CustomButtonContainer } from './custom-button.styles'

export const CustomButton = (props) => (
	<CustomButtonContainer {...props}>
		{props.caption}
	</CustomButtonContainer>
)
