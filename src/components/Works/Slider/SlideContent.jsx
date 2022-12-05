import React from 'react'
import Title from '../../Text/Title'
import TechnologiesList from './TechnologiesList'

const SlideContent = ({ img, title, path, technologies }) => {
	return (
		<a href={path}>
			<img
				data-src={img}
				className='swiper-lazy rounded-lg group-hover:scale-110 transition-transform duration-300'
				alt='img'
			/>
			<div className='absolute top-0 left-0 flex flex-col justify-end gap-2 w-full h-full p-5 bg-black bg-opacity-70 md:opacity-0 group-hover:opacity-100 transition-all duration-300'>
				<Title variant='h2' className='md:text-xl'>
					{title}
				</Title>
				<TechnologiesList technologies={technologies} />
			</div>
		</a>
	)
}

export default SlideContent
