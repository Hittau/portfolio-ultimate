import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from './Card'

const Cards = () => {
	const { t } = useTranslation()
	const cardsObj = t('services.cards', { returnObjects: true })

	return (
		<div className='grid grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] gap-5 md:gap-9 lg:gap-14'>
			{cardsObj.map(({ title, subtitle }, idx) => (
				<Card key={title} title={title} subtitle={subtitle} idx={idx} />
			))}
		</div>
	)
}

export default Cards
