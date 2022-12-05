import React from 'react'

const SocialLink = ({ icon, path }) => {
	return (
		<li>
			<a href={path} target='blank'>
				{icon}
			</a>
		</li>
	)
}

export default SocialLink
