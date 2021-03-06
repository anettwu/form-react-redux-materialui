import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import testActions from '../actions/testActions';

export default function Home() {
	const dispatch = useDispatch();

	const text = useSelector((state) => state.test.text);

	const handleClickMe = () => {
		dispatch(testActions('yeah!'));
	};
	return (
		<div>
			<Button
				variant='outlined'
				size='large'
				color='secondary'
				onClick={handleClickMe}>
				Clik me!
			</Button>
			{text && <p>{text}</p>}
		</div>
	);
}
