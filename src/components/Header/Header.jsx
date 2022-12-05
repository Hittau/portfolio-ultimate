import React, { useEffect, useRef } from 'react'
import BurgerButton from './BurgerButton'
import Logo from './Logo'
import Menu from './Menu/Menu'

const Header = () => {
	const headerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY) {
				headerRef.current.classList.add('scrolled')
			} else {
				headerRef.current.classList.remove('scrolled')
			}
		}

		window.addEventListener('scroll', () => {
			handleScroll()
		})

		return () => {
			window.addEventListener('scroll', () => {
				handleScroll()
			})
		}
	}, [])

	return (
		<header
			ref={headerRef}
			className='fixed top-0 flex justify-center w-full py-5 md:py-10 scrolled:md:py-5 scrolled:bg-[var(--background-color)] z-10 transition-[padding, background-color] duration-300'
		>
			<div className='container flex-auto flex justify-center items-center gap-6'>
				<div className='flex-auto'>
					<Logo />
				</div>
				<Menu />
				<BurgerButton />
			</div>
		</header>
	)
}

export default Header
