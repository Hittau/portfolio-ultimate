import React from 'react'
import SocialLinks from '../Hero/SocialLinks/SocialLinks'

const Footer = () => {
	return (
		<footer>
			<div className='container flex flex-col justify-center items-center gap-2 py-12'>
				<SocialLinks />
				<span>© {new Date().getFullYear()} - HittauDev</span>
			</div>
		</footer>
	)
}

export default Footer
