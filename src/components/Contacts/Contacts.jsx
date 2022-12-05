import React from 'react'
import ContactsForm from './ContactsForm'
import ContactsLinks from './ContactsLinks'

const Contacts = () => {
	return (
		<section className='bg-[var(--secondary-background-color)]'>
			<div className='container flex flex-col md:flex-row justify-between md:items-center gap-8 py-16 md:py-24'>
				<ContactsForm />
				<ContactsLinks />
			</div>
		</section>
	)
}

export default Contacts
