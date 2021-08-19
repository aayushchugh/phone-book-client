import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

import './Form.scss';

const Form =({formSubmit}) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const formHandler = e => {
		e.preventDefault();

		axios
			.post(`${process.env.REACT_APP_API_URL}/add-new-number`, {
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
			}).then(response => {
				if (response.data.status === 400) {
					alert(response.data.message);
				} else {
					formSubmit(true);
				}
			});

		document.getElementById('first-name').value = '';
		document.getElementById('last-name').value = '';
		document.getElementById('phone').value = '';
		document.getElementById('email').value = '';

		window.location.reload()
	};

	return (
		<>
			<form method='post' className='form' onSubmit={formHandler}>
				<div className='form__top'>
					<TextField
						className='form__input'
						id='first-name'
						variant='outlined'
						label='First Name'
						required
						autoComplete='off'
						onChange={e => setFirstName(e.target.value)}
					/>
					<TextField
						className='form__input'
						id='last-name'
						variant='outlined'
						label='Last Name'
						required
						autoComplete='off'
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div className='form__bottom'>
					<TextField
						id='phone'
						variant='outlined'
						label='phone number'
						type='number'
						fullWidth
						className='form__input'
						required
						autoComplete='off'
						onChange={e => setPhone(e.target.value)}
					/>
					<TextField
						variant='outlined'
						id='email'
						label='email'
						type='email'
						fullWidth
						className='form__input'
						autoComplete='off'
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
