import React from 'react'
import Label from './Label'
import Title from './Title'

const Heading = ({ label, title }) => {
	return (
		<div className='pb-12 lg:pb-20'>
			<Label>{label}</Label>
			<Title variant='h2'>{title}</Title>
		</div>
	)
}

export default Heading
