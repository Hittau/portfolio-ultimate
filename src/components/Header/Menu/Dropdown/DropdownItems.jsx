import React from 'react'
import { useSelector } from 'react-redux'
import { langs } from '../../../../utils/consts'
import DropdownItem from './DropdownItem'

const DropdownItems = () => {
	const isOpen = useSelector(state => state.dropdown.isOpen)

	return (
		<ul
			className={`${
				isOpen ? 'max-h-36 visible opacity-100' : 'max-h-0 invisible opacity-0'
			} absolute bottom-12 md:bottom-auto md:top-12 left-1/2 -translate-x-1/2 flex flex-col flex-auto divide-y-[1px] divide-[var(--dropdown-divide-color)] bg-[var(--dropdown-background-color)] rounded-lg shadow-md overflow-y-auto z-10 scroll-none transition-[max-height, opacity] duration-300`}
		>
			{langs.map(({ name, lang }) => (
				<DropdownItem key={lang} name={name} lang={lang} />
			))}
		</ul>
	)
}

export default DropdownItems
