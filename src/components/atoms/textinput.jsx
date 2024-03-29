import React from 'react';
import { SText } from './stext';

const Input = ({
	id = '',
	name = '',
	placeholder = '',
	title = '',
	type = 'text',
	error = '',
	...props
}) => {
	return (
		<div className='my-5 relative'>
			<label htmlFor={id} className='block text-start p-1'>
				{title}
			</label>
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				className='px-3 py-2 border sm:min-w-[400px]'
				{...props}
			/>
			{error.length > 0 && <SText className='text-red-500 pt-1'>{error}</SText>}
		</div>
	);
};

export default Input;
