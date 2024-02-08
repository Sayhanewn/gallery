import Button from '../atoms/button';
import Input from '../atoms/textinput';

const SignupForm = () => {
	return (
		<from>
			<Input
				id='first_name'
				name='first_name'
				placeholder='Your First Name'
				title='Your First Name *'
				type='text'
			/>

			<Input
				id='Last_name'
				name='Last_name'
				placeholder='Your Last Name'
				title='Your Last Name *'
				type='text'
			/>

			<Input id='email' name='email' placeholder='Your Eamil' title='Your Email *' type='email' />

			<Input
				id='password'
				name='password'
				placeholder='Your Eamil'
				title='Your password *'
				type='password'
			/>

			<Input
				id='confirm_password'
				name='confirm_password'
				placeholder='Your Confirm Password'
				title='Your Confirm Password *'
				type='password'
			/>

			<Button className='w-full' type='submit'>
				Sign Up
			</Button>
		</from>
	);
};

export default SignupForm;
