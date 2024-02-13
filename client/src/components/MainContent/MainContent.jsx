import About from './About'
import OurServices from './OurServices'
import logo from '../../assets/images/logo.svg'

function MainContent() {
	return (
		<main className='container'>
			<img src={logo} className='logo' alt='SleekPrint Logo' />
			<About></About>
			<div className='secRow'>
				<OurServices></OurServices>
			</div>
		</main>
	)
}

export default MainContent
