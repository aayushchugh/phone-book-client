import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

import './Form.scss';

function Form(props) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const formHandler = e => {
		axios
			.post(`${process.env.REACT_APP_API_URL}/add-new-number`, {
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
			})
			.then(response => {
				console.log(response);
				if (response.data.status === 400) {
					alert(response.data.message);
				}
			});

		e.preventDefault();
	};

	return (
		<>
			<form method='post' className='form' onSubmit={formHandler}>
				<div className='form__top'>
					<TextField
						className='form__input'
						variant='outlined'
						label='First Name'
						required
						onChange={e => setFirstName(e.target.value)}
					/>
					<TextField
						className='form__input'
						variant='outlined'
						label='Last Name'
						required
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div className='form__bottom'>
					<TextField
						variant='outlined'
						label='phone number'
						type='number'
						fullWidth
						className='form__input'
						required
						onChange={e => setPhone(e.target.value)}
					/>
					<TextField
						variant='outlined'
						label='email'
						type='email'
						fullWidth
						className='form__input'
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<Button
					type='submit'
					className='form__btn'
					variant='contained'
					color='primary'
				>
					Add New Contact
				</Button>
			</form>
		</>
	);
}

export default Form;
