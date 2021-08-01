import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core/';
import './List.scss';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(name, phone, email) {
	return { name, phone, email };
}

const rows = [
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
];

function List() {
	const classes = useStyles();

	const [response, setResponse] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}get-all-numbers`).then(data => {
			setResponse(data.data.data);
		});
	}, []);

	return (
		<TableContainer className='table' component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align='right'>Phone Number</TableCell>
						<TableCell align='right'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{response.map(phone => (
						<TableRow key={phone._id}>
							<TableCell component='th' scope='row'>
								{phone.firstName}
							</TableCell>
							<TableCell align='right'>{phone.phone}</TableCell>
							<TableCell align='right'>{phone.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default List;
