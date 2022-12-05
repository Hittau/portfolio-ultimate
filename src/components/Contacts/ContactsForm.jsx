import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { contactsFields } from '../../utils/consts'

const ContactsForm = () => {
	const formRef = useRef(null)

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_ck759jh',
				'template_kcejy97',
				formRef.current,
				'JTvOVsiB444AFVmEl'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	return (
		<form
			ref={formRef}
			onSubmit={sendEmail}
			className='flex flex-col flex-auto gap-4 sm:gap-6 md:max-w-2xl'
		>
			{contactsFields.map(({ type, name, placeholder, field }) => {
				const Field = field ? field : 'input'

				return (
					<Field
						className={`bg-[var(--dropdown-background-color)] py-3 md:py-4 px-6 rounded-lg outline-none ${
							field === 'textarea' ? 'h-24 md:h-48 min-h-[56px] my-2' : ''
						}`}
						key={name}
						type={type}
						name={name}
						placeholder={placeholder}
					/>
				)
			})}
			<input
				className='capitalize bg-ocean-300 text-white py-3 md:py-4 rounded-lg cursor-pointer'
				type='submit'
				value='Send'
			/>
		</form>
	)
}

export default ContactsForm
