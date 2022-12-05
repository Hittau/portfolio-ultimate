import React from 'react'
import { FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import SocialLink from './SocialLink'

const socialLinkIconClass =
	'text-[var(--primary-color)] hover:text-ocean-300 transition-colors duration-300'

const socialLinks = [
	{
		icon: <FaTelegramPlane className={socialLinkIconClass} size={24} />,
		path: 'https://web.telegram.org',
	},
	{
		icon: <FaGithub className={socialLinkIconClass} size={24} />,
		path: 'https://github.com',
	},
	{
		icon: <FaTwitter className={socialLinkIconClass} size={24} />,
		path: 'https://twitter.com',
	},
]

const SocialLinks = () => {
	return (
		<ul className='flex gap-8 py-4'>
			{socialLinks.map(({ icon, path }) => (
				<SocialLink key={path} icon={icon} path={path} />
			))}
		</ul>
	)
}

export default SocialLinks
