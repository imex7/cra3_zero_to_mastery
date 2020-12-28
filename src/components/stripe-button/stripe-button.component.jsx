import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_51I1XvVKkRbqcq2h7ijczQfn838bn6qRRmcNwGnVCIQfzEi3uJwZTqxSpk2cy7VnG0oTUIQqUvARxHCwx3UKNhd5X00LfupPdsD'
	const onToken = token => {
		console.log(token);
		alert('Успешно!!!')
	}
	return <>
		<StripeCheckout 
			label='Buy this shit'
			name="crwn clothing"
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Total ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	</>
}

export default StripeCheckoutButton