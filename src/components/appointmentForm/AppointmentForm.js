import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	const handleChangeTitle = ({ target }) => {
		setTitle(target.value);
	};

	const handleChangeDate = ({ target }) => {
		setDate(target.value);
	};

	const handleChangeTime = ({ target }) => {
		setTime(target.value);
	};

	const handleChangeContact = ({ target }) => {
		setContact(target.value);
	};

	const getContactNames = () => {
		return contacts.map((contact) => contact.name);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={title}
				placeholder='Appointment Title'
				onChange={handleChangeTitle}
				required
			/>
			<ContactPicker
				contacts={getContactNames()}
				value={contact}
				onChange={handleChangeContact}
				placeholder='Appointment With'
			/>
			<input type='date' value={date} onChange={handleChangeDate} min={getTodayString()} required />
			<input type='time' value={time} onChange={handleChangeTime} required />
			<input type='submit' />
		</form>
	);
};
