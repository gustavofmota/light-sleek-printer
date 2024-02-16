import { Tilt } from 'react-tilt'
import Button from '../common/buttonComponent/ButtonComponent'


const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 10, // max tilt rotation (degrees)
	perspective: 6000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

function Card({ title, description, image, code }) {
	return (
		<Tilt className='tilt' options={defaultOptions}>
			<div className='card'>
				<h1>{title}</h1>
				<p>{description}</p>
				<div className='btnContainer'>
					<Button
						title={'Contact us'}
						type={'form'}
						code={code}
					></Button>
				</div>
			</div>
		</Tilt>
	)
}

export default Card
