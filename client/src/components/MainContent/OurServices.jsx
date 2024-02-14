import { ReactComponent as ArrowDown } from '../../assets/images/Arrow_Down.svg'

function OurServices() {
	// This function will be called when the "OUR SERVICES" text or arrow is clicked
	const scrollToServices = () => {
		// Assuming there is an element with an ID 'services' on your page
		const servicesSection = document.getElementById('services')
		if (servicesSection) {
			servicesSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='servScroller' onClick={scrollToServices}>
			<p>OUR SERVICES</p>
			<ArrowDown className='img' />
		</div>
	)
}

export default OurServices
