import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { closeDropdown } from '../../../../store/slices/dropdownSlice'

const DropdownItem = ({ name, lang }) => {
	const dispatch = useDispatch()
	const { i18n } = useTranslation()

	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		dispatch(closeDropdown())
	}

	return (
		<li
			onClick={() => changeLanguage(lang)}
			className='cursor-pointer px-8 py-1 select-none hover:bg-[var(--dropdown-divide-color)]'
		>
			{name}
		</li>
	)
}

export default DropdownItem
