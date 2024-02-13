import './styles/App.css'
import LanguageComponent from './components/common/LanguageComponent/LanguageComponent'
import MainContent from './components/MainContent/MainContent'
import ServicesComponent from './components/ServiceCards/ServicesComponent'

function App() {
	return (
		<>
			<main className='App'>
				<header>
					<LanguageComponent></LanguageComponent>
				</header>

				<MainContent></MainContent>
			</main>
			<ServicesComponent></ServicesComponent>
		</>
	)
}

export default App
