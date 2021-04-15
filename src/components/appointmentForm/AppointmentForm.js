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

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={title}
				placeholder='Appointment Title'
				onChange={handleChangeTitle}
			/>
			<ContactPicker contacts={contacts} />
			<input type='date' value={date} onChange={handleChangeDate} min={getTodayString()} />
			<input type='time' value={time} onChange={handleChangeTime} />
			<input type='submit' />
		</form>
	);
};
