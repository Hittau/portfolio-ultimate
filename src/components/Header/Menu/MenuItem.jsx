import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../store/slices/menuSlice'

const MenuItem = ({ name, path }) => {
	const dispatch = useDispatch()

	const handleClick = e => {
		e.preventDefault()
		dispatch(closeMenu())
	}

	return (
		<li onClick={handleClick}>
			<a
				href={path}
				className='relative text-xl md:text-base capitalize after:absolute after:-bottom-2 after:left-1/2 after:block after:bg-[var(--primary-color)] after:w-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 link-hover'
			>
				{name}
			</a>
		</li>
	)
}

export default MenuItem
