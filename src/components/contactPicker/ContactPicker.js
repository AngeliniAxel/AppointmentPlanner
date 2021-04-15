import React from 'react';

export const ContactPicker = ({ contacts, handleChangeContact }) => {
	return (
		<select onChange={handleChangeContact}>
			<option value='' key={-1} selected='selected'>
				No Contact Selected
			</option>
			{contacts.map((contact) => (
				<option value={contact} key={contact}>
					{contact}
				</option>
			))}
		</select>
	);
};
