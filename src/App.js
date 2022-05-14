import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';
function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Routes>
					<Route path='/' exact element={<Users />}></Route>
					<Route path='/place/new' element={<NewPlace />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
