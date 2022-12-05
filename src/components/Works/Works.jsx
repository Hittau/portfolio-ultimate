import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../Text/Heading'
import Slider from './Slider/Slider'

const Works = () => {
	const { t } = useTranslation()

	return (
		<section>
			<div className='container container-customization py-16 md:py-28'>
				<Heading label={t('works.label')} title={t('works.title')} />
				<Slider />
			</div>
		</section>
	)
}

export default Works
