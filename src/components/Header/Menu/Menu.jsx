import React from 'react'
import { useSelector } from 'react-redux'
import MenuButtons from './MenuButtons'
import MenuItems from './MenuItems'

const Menu = () => {
	const isOpen = useSelector(state => state.menu.isOpen)

	return (
		<nav
			className={`fixed ${
				isOpen ? 'top-0' : '-top-full'
			} md:static w-full md:w-max h-full md:h-max py-8 md:py-0 flex flex-col md:flex-row flex-auto items-center justify-between gap-9 md:gap-6 bg-[var(--background-color)] md:bg-transparent shadow-xl md:shadow-none overflow-y-auto md:overflow-y-visible transition-all duration-500 md:transition-none`}
		>
			<MenuItems />
			<MenuButtons />
		</nav>
	)
}

export default Menu
