import { Route, Routes } from 'react-router-dom'
import { AboutScreen, ContactScreen, GiveScreen, GroupScreen, HomeScreen } from './screens'
function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/about' element={<AboutScreen />} />
			<Route path='/group' element={<GroupScreen />} />
			<Route path='/give' element={<GiveScreen />} />
			<Route path='/contact' element={<ContactScreen />} />
		</Routes>
	)
}

export default App
