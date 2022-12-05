import React from 'react'
import { contactsLinks } from '../../utils/consts'
import ContactsLink from './ContactsLink'

const ContactsLinks = () => {
	return (
		<ul className='flex flex-col gap-12'>
			{contactsLinks.map(({ title, subtitle, icon, path }) => {
				return (
					<ContactsLink
						key={path}
						title={title}
						subtitle={subtitle}
						icon={icon}
						path={path}
					/>
				)
			})}
		</ul>
	)
}

export default ContactsLinks
