import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
	
	state = {
		email: '',
		password: ''
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const {emailSignInStart} = this.props
		const {email, password} = this.state
		emailSignInStart(email, password)
		// try {
		// 	let res = await auth.signInWithEmailAndPassword(email, password)
		// 	this.setState({
		// 		email: '',
		// 		password: ''
		// 	})
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	handleChange = (e) => {
		const {value, name} = e.target
		this.setState({
			[name]: value
		})
	}

	render() {
		const {googleSignInStart} = this.props
		return <div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handleSubmit}>
				<FormInput type="email" name="email" value={this.state.email}
					handleChange={this.handleChange} label="email"	/>
				<FormInput type="password" name="password" value={this.state.password}
					handleChange={this.handleChange} label="password" />

				<div className="buttons">
					<CustomButton type="submit" caption="Sign In" />
					<CustomButton caption="Sign In with Google"
						isGoogleSignIn
						onClick={googleSignInStart}	/>
				</div>
				
			</form>
		</div>
	}
}

const mdp = (dispatch) => {
	return {
		googleSignInStart: () => dispatch(googleSignInStart()),
		emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
	}
}

export default connect(null, mdp)(SignIn)