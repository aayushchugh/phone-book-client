import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

import './Form.scss';

const UpdateForm = () => {
	// const [response, setResponse] = useState({});
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const id = useParams();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/get-number/${id.id}`)
			.then(data => {
				setFirstName(data.data.data.firstName);
				setLastName(data.data.data.lastName);
				setPhone(data.data.data.phone);
				setEmail(data.data.data.email);
			});
	}, [id]);

	const formHandler = e => {
		e.preventDefault();

		axios
			.put(`${process.env.REACT_APP_API_URL}/update-number/${id.id}`, {
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
			})
			.then(res => {
				window.location = '/';
			});
	};

	return (
		<>
			<form method='post' className='form' onSubmit={formHandler}>
				<div className='form__top'>
					<TextField
						className='form__input'
						id='first-name'
						variant='outlined'
						helperText='First Name'
						required
						autoComplete='off'
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
					<TextField
						className='form__input'
						id='last-name'
						variant='outlined'
						helperText='Last Name'
						required
						autoComplete='off'
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div className='form__bottom'>
					<TextField
						id='phone'
						variant='outlined'
						helperText='phone number'
						type='number'
						fullWidth
						className='form__input'
						required
						autoComplete='off'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<TextField
						variant='outlined'
						id='email'
						helperText='email'
						type='email'
						fullWidth
						className='form__input'
						autoComplete='off'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<Button
					type='submit'
					className='form__btn'
					variant='contained'
					color='primary'
				>
					Update
				</Button>
			</form>
		</>
	);
};

export default UpdateForm;
