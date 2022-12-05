import React from 'react'

const TechnologiesItem = ({ technology }) => {
	return (
		<li
			target='blank'
			className='border-cinder-100 border-2 rounded-md leading-none p-1'
		>
			{technology}
		</li>
	)
}

export default TechnologiesItem
