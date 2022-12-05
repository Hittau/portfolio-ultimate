import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../store/slices/menuSlice'

const BurgerButton = () => {
	const isOpen = useSelector(state => state.menu.isOpen)
	const dispatch = useDispatch()

	return (
		<div
			className='md:hidden w-8 h-8 py-2 px-1 z-20'
			onClick={() => dispatch(toggleMenu())}
		>
			<div className='w-full h-full relative'>
				<div
					className={`absolute ${
						isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
					} w-full h-[2px] bg-[var(--primary-color)] rounded-full transition-all duration-300`}
				></div>
				<div
					className={`absolute top-1/2 ${
						isOpen ? 'scale-0' : ''
					} -translate-y-1/2 w-full h-[2px] bg-[var(--primary-color)] rounded-full transition-all duration-300`}
				></div>
				<div
					className={`absolute ${
						isOpen ? '-rotate-45 bottom-1/2 translate-y-1/2' : 'bottom-0'
					} w-full h-[2px] bg-[var(--primary-color)] rounded-full transition-all duration-300`}
				></div>
			</div>
		</div>
	)
}

export default BurgerButton
