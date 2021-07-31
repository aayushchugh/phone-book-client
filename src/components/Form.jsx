import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './Form.scss';

function Form() {
	return (
		<>
			<form method='post' className='form'>
				<div className='form__top'>
					<TextField
						className='form__input'
						variant='outlined'
						label='First Name'
					/>
					<TextField
						className='form__input'
						variant='outlined'
						label='Last Name'
					/>
				</div>

				<div className='form__bottom'>
					<TextField
						variant='outlined'
						label='phone number'
						type='number'
						fullWidth
						className='form__input'
					/>
					<TextField
						variant='outlined'
						label='email'
						type='email'
						fullWidth
						className='form__input'
					/>
				</div>

				<Button className='form__btn' variant='contained' color='primary'>
					Add New Contact
				</Button>
			</form>
		</>
	);
}

export default Form;
