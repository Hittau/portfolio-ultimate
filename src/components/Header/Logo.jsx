import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'

const Logo = () => {
	return (
		<a href='/' className='flex items-center gap-2 max-w-max py-2'>
			<div className='flex justify-center items-center w-10 h-10 rounded-full bg-[var(--primary-color)] transition-colors duration-500'>
				<BiCodeAlt
					size={28}
					className='text-[var(--background-color)] transition-colors duration-500'
				/>
			</div>
			<span className='text-2xl font-jakarta font-bold tracking-tight'>
				Alex.
			</span>
		</a>
	)
}

export default Logo
