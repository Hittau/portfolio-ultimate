import React from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'

const MenuItems = () => {
	const { t } = useTranslation()
	const menuObj = t('header.menu', { returnObjects: true })

	return (
		<ul className='flex flex-col md:flex-row flex-auto justify-center md:justify-start gap-7 lg:gap-14 text-center md:text-start'>
			{menuObj.map(({ name, path }) => (
				<MenuItem key={path} name={name} path={path} />
			))}
		</ul>
	)
}

export default MenuItems
