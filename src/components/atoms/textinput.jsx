import React from 'react'
import GoBackButton from './backbutton';

const TextInput = ({id = '', name = '', placeholder = '', title = ''}) => {
  return (
    <div className='my-5 relative'>
        <GoBackButton className='absolute top-10 left-10' />
        <label htmlFor={id} className='block text-start p-1'>{`${title} *`}</label>
        <input type="text" name={name} id={id} placeholder={placeholder} className='px-3 py-2 border sm:min-w-[400px]' />
    </div>
  )
}

export default TextInput;