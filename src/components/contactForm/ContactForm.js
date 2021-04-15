import React from 'react';

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
	const handleChangeName = ({ target }) => {
		setName(target.value);
	};

	const handleChangePhone = ({ target }) => {
		setPhone(target.value);
	};

	const handleChangeEmail = ({ target }) => {
		setEmail(target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={name} onChange={handleChangeName} placeholder='Name'></input>
			<input
				type='tel'
				value={phone}
				pattern='[0-9]{6}'
				onChange={handleChangePhone}
				placeholder='Phone'
			/>
			<input type='email' value={email} onChange={handleChangeEmail} placeholder='Email' />
			<input type='submit' />
		</form>
	);
};
