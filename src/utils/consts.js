import { FiMonitor } from 'react-icons/fi'
import { MdLanguage } from 'react-icons/md'
import { RiVipCrownLine } from 'react-icons/ri'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import Furniking from '../assets/Works/furniking.jpg'
import IceCream from '../assets/Works/ice-cream.jpeg'
import Portfolio from '../assets/Works/portfolio.jpeg'

export const langs = [
	{
		name: 'English',
		lang: 'en',
	},
	{
		name: 'Русский',
		lang: 'ru',
	},
]

export const servicesIcons = [RiVipCrownLine, FiMonitor, MdLanguage]

export const works = [
	{
		img: Furniking,
		title: 'Furniture store website',
		path: '/work1',
		technologies: ['react', 'redux', 'firebase'],
	},
	{
		img: Portfolio,
		title: 'Portfolio website',
		path: '/work2',
		technologies: ['react', 'redux', 'firebase'],
	},
	{
		img: IceCream,
		title: 'Ice cream store website',
		path: '/work3',
		technologies: ['react', 'redux', 'firebase'],
	},
]

export const contactsFields = [
	{
		type: 'text',
		name: 'name',
		placeholder: 'Name',
	},
	{
		type: 'email',
		name: 'email',
		placeholder: 'Email',
	},
	{
		type: 'text',
		name: 'message',
		placeholder: 'Message',
		field: 'textarea',
	},
]

export const contactsLinks = [
	{
		title: 'telegram',
		subtitle: '@hittttau',
		icon: FaTelegramPlane,
		path: 'https://t.me/Hittttau',
	},
	{
		title: 'phone',
		subtitle: '(981) 977-3055',
		icon: FiPhoneCall,
		path: 'tel:9819773055',
	},
	{
		title: 'e-mail',
		subtitle: 'maksimsraud@gmail.com',
		icon: MdOutlineMailOutline,
		path: 'https://gmail.com',
	},
]
