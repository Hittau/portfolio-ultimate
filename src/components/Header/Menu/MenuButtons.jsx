import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../../store/slices/menuSlice'
import Dropdown from './Dropdown/Dropdown'
import ThemeToggler from './ThemeToggler'

const MenuButtons = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	return (
		<div className='flex gap-2 lg:gap-4'>
			<Dropdown />
			<ThemeToggler />
			<button
				onClick={() => dispatch(closeMenu())}
				className='text-sm text-[var(--primary-color)] font-medium capitalize py-3 px-6 border-[#f1f1f1] border-[1px] rounded-lg hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-colors duration-200 ease-in'
			>
				{t('header.button')}
			</button>
		</div>
	)
}

export default MenuButtons
