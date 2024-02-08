import React from 'react';
import GoBackButton from './backbutton';

const EamilInput = ({
	id = '',
	name = '',
	placeholder = '',
	title = '',
	value = '',
	type = 'text',
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
				value={value}
			/>
		</div>
	);
};

export default EamilInput;
