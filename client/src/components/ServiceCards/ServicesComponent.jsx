import Card from './CardComponent'

const services = [
	{
		code: 'service_1',
		title: 'Service One',
		description: 'Description for service one.',
		image: 'path/to/image1.png',
	},
	{
		code: 'service_2',
		title: 'Service Two',
		description: 'Description for service two.',
		image: 'path/to/image2.png',
	},
	{
		code: 'service_3',
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
						code={service.code}
						image={service.image}
					/>
				)
			})}
		</section>
	)
}

export default ServicesComponent
