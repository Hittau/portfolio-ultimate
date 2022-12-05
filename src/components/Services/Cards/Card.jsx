import React from 'react'
import { servicesIcons } from '../../../utils/consts'
import Badge from '../../Badge'
import TitleSmaller from '../../Text/TitleSmaller'

const Card = ({ title, subtitle, idx }) => {
	const icon = servicesIcons[idx]

	return (
		<div className='flex flex-col items-center text-center basis-1/3 rounded-lg p-8 md:p-14 bg-[var(--background-color)] transition-[background] duration-300'>
			<Badge icon={icon} />
			<TitleSmaller className='pt-6 pb-4'>{title}</TitleSmaller>
			<p className='text-sm leading-6'>{subtitle}</p>
		</div>
	)
}

export default Card
