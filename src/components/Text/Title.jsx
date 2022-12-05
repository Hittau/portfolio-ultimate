import React from 'react'

const Title = ({ children, variant, className }) => {
	const Heading = variant

	return (
		<Heading
			className={`${
				className ? className : 'text-2xl lg:text-4xl'
			} font-bold font-jakarta capitalize`}
		>
			{children}
		</Heading>
	)
}

export default Title
