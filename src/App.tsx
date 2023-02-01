import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Card from './components/Card/Card'
import Map from './components/Map'

function App () {
	return (
		<div
			className='h-[35vh] bg-center bg-main bg-no-repeat bg-cover'
		>
			<Header />
			<SearchInput />
			<Card />
			<Map />
		</div>
	)
}

export default App
