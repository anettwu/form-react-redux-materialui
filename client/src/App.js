import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/form' component={Form} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
