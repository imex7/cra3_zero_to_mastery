import React from 'react';
import './sign-up.styles.scss'
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export class SignUp extends React.Component {

	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const { displayName, email, password, confirmPassword } = this.state
		if (password !== confirmPassword) {
			alert("Пароли не совпадают")
			return
		}
		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, {displayName})
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		} catch (error) {
			console.log(error);
		}
	}

	handleChange = (e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value
		})
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return <div className="sign-up">
			<h2 className="title">Sign Up</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={this.handleSubmit}>
				<FormInput type="text" name="displayName" value={displayName}
					onChange={this.handleChange} label="Display Name" />
				<FormInput type="email" name="email" value={email}
					onChange={this.handleChange} label="Email" />
				<FormInput type="password" name="password" value={password}
					onChange={this.handleChange} label="Password" />
				<FormInput type="password" name="confirmPassword" value={confirmPassword}
					onChange={this.handleChange} label="Confirm Password" />
				<CustomButton type="submit" caption="Sign Up" />
			</form>
		</div>
	}

}