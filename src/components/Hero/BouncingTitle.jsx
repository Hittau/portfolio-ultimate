import React from 'react'
import { useTranslation } from 'react-i18next'

const BouncingTitle = () => {
	const { t } = useTranslation()
	const generalTitleObj = t('hero.title.general', { returnObjects: true })
	const highlightedTitleObj = t('hero.title.highlighted', {
		returnObjects: true,
	})

	return (
		<h1 className='relative text-2xl sm:text-3xl lg:text-[44px] text-[var(--primary-color)] font-bold font-jakarta sm:py-2 cursor-default'>
			{generalTitleObj.map(({ name, id }) => (
				<span
					key={id}
					className='inline-block hover:text-ocean-300 transition-colors duration-300'
					onMouseEnter={e => e.target.classList.add('bouncing')}
					onAnimationEnd={e => e.target.classList.remove('bouncing')}
				>
					{name}
				</span>
			))}
			&nbsp;
			{highlightedTitleObj.map(({ name, id }) => (
				<span
					key={id}
					className='inline-block text-ocean-300 hover:text-[var(--primary-color)] transition-colors duration-300'
					onMouseEnter={e => e.target.classList.add('bouncing')}
					onAnimationEnd={e => e.target.classList.remove('bouncing')}
				>
					{name}
				</span>
			))}
		</h1>
	)
}

export default BouncingTitle
