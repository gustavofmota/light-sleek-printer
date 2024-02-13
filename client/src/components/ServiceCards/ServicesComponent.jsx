import Card from './CardComponent'

let services = [
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

function GroupServicesComponent() {
	return (
		<section>
			{services.map((index, service) => {
				;<Card
					key={index}
					title={service.title}
					description={service.description}
					image={service.image}
				/>
			})}
		</section>
	)
}

export default GroupServicesComponent
