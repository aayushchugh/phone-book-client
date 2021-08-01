import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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

function List() {
	const classes = useStyles();

	const [response, setResponse] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}/get-all-numbers`).then(data => {
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
						<TableCell align='right'>Edit</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{response.map(phone => (
						<TableRow key={phone._id}>
							<TableCell component='th' scope='row'>
								{phone.firstName} {phone.lastName}
							</TableCell>
							<TableCell align='right'>{phone.phone}</TableCell>
							<TableCell align='right'>
								{phone.email ? phone.email : 'N/A'}
							</TableCell>
							<TableCell align='right'>
								<DeleteIcon />
								<EditIcon />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default List;
