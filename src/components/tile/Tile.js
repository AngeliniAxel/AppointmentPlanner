import React from 'react';

export const Tile = ({ tile }) => {
	const tileArr = Object.values(tile);

	return (
		<div className='tile-container'>
			{tileArr.map((item, index) => (
				<p key={index} className={`${index === 0 ? 'tile-title' : ''} tile`}>
					- {item}
				</p>
			))}
		</div>
	);
};
