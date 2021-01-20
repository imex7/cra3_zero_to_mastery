import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({isLoading, ...other}) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
			) : (
				<WrappedComponent {...other} />
		)
	}
	return Spinner
}


export default WithSpinner