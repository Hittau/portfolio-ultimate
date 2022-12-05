import React, { Suspense } from 'react'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Works from './components/Works/Works'

const App = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
			<Hero />
			<Services />
			<Works />
			<Contacts />
			<Footer />
		</Suspense>
	)
}

export default App
