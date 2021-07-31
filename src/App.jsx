import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Form from './components/Form';
import List from './components/List';

function App() {
	return (
		<>
			<CssBaseline />
			<Form />
			<List />
		</>
	);
}

export default App;
