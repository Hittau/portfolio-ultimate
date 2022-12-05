import React, { useRef } from 'react'
import { works } from '../../../utils/consts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Navigation } from 'swiper'
import 'swiper/css'
import SliderNavigation from './SliderNavigation'
import SlideContent from './SlideContent'
import { useTranslation } from 'react-i18next'

const Slider = () => {
	const { t } = useTranslation()
	const worksObj = t('works.slides', { returnObjects: true })
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	return (
		<Swiper
			className='mySwiper select-none'
			modules={[Navigation, Lazy]}
			spaceBetween={15}
			slidesPerView={1.2}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={swiper => {
				swiper.params.navigation.prevEl = navigationPrevRef.current
				swiper.params.navigation.nextEl = navigationNextRef.current
			}}
			loop={true}
			lazy={{
				loadPrevNext: true,
				loadPrevNextAmount: 2,
			}}
			breakpoints={{
				640: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.5,
				},
				1024: {
					spaceBetween: 32,
					slidesPerView: 3,
				},
				1280: {
					spaceBetween: 56,
					slidesPerView: 3,
				},
			}}
		>
			{works.map(({ img, path, technologies }, idx) => {
				const title = worksObj[idx]

				return (
					<SwiperSlide
						key={path}
						className='relative text-[#f1f1f1] rounded-lg overflow-hidden cursor-pointer group'
					>
						<SlideContent
							img={img}
							title={title}
							path={path}
							technologies={technologies}
						/>
					</SwiperSlide>
				)
			})}
			<SliderNavigation
				navigationPrevRef={navigationPrevRef}
				navigationNextRef={navigationNextRef}
			/>
		</Swiper>
	)
}

export default Slider
