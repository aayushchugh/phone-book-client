import React,{useState} from 'react';
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
	const handleFormSubmit = () =>{
		setFormSubmit(true);
	}
	return (
		<>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path='/' exact>
						<Form formSubmit={handleFormSubmit}/>
						<List formSubmit={formSubmit}/>
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
