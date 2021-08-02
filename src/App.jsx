import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import List from './components/List';

function App() {
	return (
		<>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path='/' exact>
						<Form />
						<List />
					</Route>

					<Route exact path='/update-contact/:id'>
						<UpdateForm />
						<List />
					</Route>

					<Route exact path='/404'>
						<h1 align='center'>404</h1>
						<h2 align='center'>Page not found</h2>
					</Route>
					<Redirect to='/404' />
				</Switch>
			</Router>
		</>
	);
}

export default App;
