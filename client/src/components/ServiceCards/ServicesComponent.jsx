import Card from './CardComponent'

const services = [
	{
		title: 'Service One',
		description: 'Description for service one.',
		image: 'path/to/image1.png',
	},
	{
		title: 'Service Two',
		description: 'Description for service two.',
		image: 'path/to/image2.png',
	},
	{
		title: 'Service Three',
		description: 'Description for service three.',
		image: 'path/to/image3.png',
	},
]

function ServicesComponent() {
	return (
		<section id='services' className='services'>
			{services.map((service, index) => {
				return (
					<Card
						key={index}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				)
			})}
		</section>
	)
}

export default ServicesComponent
