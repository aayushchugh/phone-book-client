import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
	createData('Ayush Chugh', 9501852700, 'ayushchugh2006@gmail.com'),
];

function List() {
	const classes = useStyles();

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
					{rows.map(row => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.phone}
							</TableCell>
							<TableCell align='right'>{row.phone}</TableCell>
							<TableCell align='right'>{row.email}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default List;
