import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../../../store/slices/menuSlice'
import { toggleTheme } from '../../../store/slices/themeSlice'
import { BiMoon, BiSun } from 'react-icons/bi'

const ThemeToggler = () => {
	const dispatch = useDispatch()
	const darkmode = useSelector(state => state.theme.darkmode)

	useEffect(() => {
		document.body.setAttribute('data-dark', darkmode)
	}, [darkmode])

	const handleToggleTheme = () => {
		dispatch(toggleTheme())
		dispatch(closeMenu())
	}

	const visible = 'left-1/2 -translate-x-1/2 opacity-100'
	const invisible = 'left-1/2 -translate-x-1/2 md:translate-x-0 opacity-0'

	return (
		<button
			onClick={handleToggleTheme}
			className='relative flex justify-center items-center w-11 p-2'
			tabIndex={-1}
		>
			<BiSun
				size={28}
				color='#f1f1f1'
				className={`absolute ${
					darkmode ? visible : `${invisible} md:-left-full`
				} pointer-events-none transition-[left, opacity] duration-300`}
			/>
			<BiMoon
				size={28}
				color='#232e35'
				className={`absolute ${
					darkmode ? `${invisible} md:left-full` : visible
				} pointer-events-none transition-[left, opacity] duration-300`}
			/>
		</button>
	)
}

export default ThemeToggler
