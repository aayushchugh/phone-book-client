import React, { useState } from 'react';
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
	const [formSubmit, setFormSubmit] = useState(false);

	const handleFormSubmit = bool => {
		setFormSubmit(bool);
	};

	return (
		<>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path='/' exact>
						<Form setFormSubmit={handleFormSubmit} />
						<List formSubmit={formSubmit} setFormSubmit={handleFormSubmit} />
					</Route>

					<Route exact path='/update-contact/:id'>
						<UpdateForm setFormSubmit={handleFormSubmit} />
						<List formSubmit={formSubmit} setFormSubmit={handleFormSubmit} />
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
