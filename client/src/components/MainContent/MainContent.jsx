import About from './About'
import OurServices from './OurServices'
import logo from '../../assets/images/logo.svg'

function MainContent() {
	return (
		<section className='container'>
			<img src={logo} className='logo' alt='SleekPrint Logo' />
			<About></About>
			<div className='secRow'>
				<OurServices></OurServices>
			</div>
		</section>
	)
}

export default MainContent
