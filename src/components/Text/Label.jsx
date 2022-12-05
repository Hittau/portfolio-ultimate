import React from 'react'

const Label = ({ children }) => {
	return (
		<div className='inline-flex items-center gap-4 pb-2'>
			<div className='w-4 h-[2px] bg-cinder-100'></div>
			<span className='text-xs font-medium text-cinder-100 uppercase tracking-[0.45rem]'>
				{children}
			</span>
		</div>
	)
}

export default Label
