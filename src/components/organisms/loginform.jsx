'use client';
import { useState } from 'react';
import Button from '../atoms/button';

const { default: Input } = require('../atoms/textinput');

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [password, setPassword] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const setUserOnLocalStore = localStorage.setItem('user', JSON.stringify({ email, password }));
		console.log({ email, password });
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailErr('Invalid email address');
			return false;
		}
		setEmailErr('');
		return true;
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);

		if (password.length < 6) {
			setPasswordErr('Password must be at least 6 characters');
			return false;
		}
		setPasswordErr('');
		return true;
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				id='email'
				name='email'
				placeholder='Your Eamil'
				title='Your Email *'
				type='email'
				value={email}
				onChange={handleEmail}
				error={emailErr}
			/>
			<Input
				id='password'
				name='password'
				placeholder='Your Password'
				title='Your Password *'
				type='password'
				value={password}
				onChange={handlePassword}
				error={passwordErr}
			/>
			<Button
				type='submit'
				className='w-full'
				disabled={passwordErr.length > 0 || emailErr.length > 0 || !email.length > 0}>
				Log In
			</Button>
		</form>
	);
};

export default LoginForm;
