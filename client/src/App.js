import './styles/App.css'
import LanguageComponent from './components/common/LanguageComponent/LanguageComponent'
import MainContent from './components/MainContent/MainContent'

function App() {
	return (
		<div className='App'>
			<header>
				<LanguageComponent></LanguageComponent>
			</header>
			<MainContent></MainContent>
		</div>
	)
}

export default App
