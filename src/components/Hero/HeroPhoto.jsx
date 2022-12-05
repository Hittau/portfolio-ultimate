import React from 'react'
import { useSelector } from 'react-redux'
import HeroImg from '../../assets/hero.png'

const HeroPhoto = () => {
	const darkmode = useSelector(state => state.theme.darkmode)

	return (
		<div className='relative md:pr-6 select-none'>
			<div
				className={`flex items-end w-64 sm:w-72 lg:w-[336px] h-72 sm:h-80 lg:h-[400px] bg-ocean-200 rounded-2xl ${
					darkmode ? 'shadow-md' : 'shadow-xl'
				} transition-shadow duration-300`}
			>
				<img
					src={HeroImg}
					className='rounded-b-xl sm:rounded-bl-xl'
					alt='img'
				/>
			</div>
			<div
				className={`absolute top-0 -rotate-[9.55deg] w-64 sm:w-72 lg:w-[336px] h-72 sm:h-80 lg:h-[400px] bg-ocean-300 rounded-2xl ${
					darkmode ? 'shadow-md' : 'shadow-xl'
				} -z-10 transition-shadow duration-300`}
			></div>
		</div>
	)
}

export default HeroPhoto
