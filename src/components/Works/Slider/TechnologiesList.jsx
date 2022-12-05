import React from 'react'
import TechnologiesItem from './TechnologiesItem'

const TechnologiesList = ({ technologies }) => {
	return (
		<ul className='flex gap-2'>
			{technologies.map(technology => (
				<TechnologiesItem key={technology} technology={technology} />
			))}
		</ul>
	)
}

export default TechnologiesList
