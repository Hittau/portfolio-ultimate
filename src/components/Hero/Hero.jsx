import React from 'react'

import SocialLinks from './SocialLinks/SocialLinks'
import HeroDesc from './HeroDesc'
import HeroPhoto from './HeroPhoto'

const Hero = () => {
	return (
		<section className='h-max min-h-screen'>
			<div className='container flex flex-col-reverse md:flex-row justify-between items-center gap-16 py-[20vh] md:py-[25vh]'>
				<div className='flex flex-col items-center sm:items-start text-center sm:text-start'>
					<HeroDesc />
					<SocialLinks />
				</div>
				<HeroPhoto />
			</div>
		</section>
	)
}

export default Hero
