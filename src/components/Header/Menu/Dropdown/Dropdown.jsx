import React, { useEffect, useRef } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'
import {
	closeDropdown,
	toggleDropdown,
} from '../../../../store/slices/dropdownSlice'
import { useDispatch, useSelector } from 'react-redux'
import DropdownItems from './DropdownItems'

const Dropdown = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.dropdown.isOpen)
	const dropdownRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = e => {
			if (isOpen && !dropdownRef.current.contains(e.target)) {
				dispatch(closeDropdown())
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				onClick={() => dispatch(toggleDropdown())}
				className='p-2'
				tabIndex={-1}
			>
				<IoLanguageOutline size={28} />
			</button>
			<DropdownItems />
		</div>
	)
}

export default Dropdown
