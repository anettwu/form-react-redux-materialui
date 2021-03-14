import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Grid } from '@material-ui/core';
import {
	decrement,
	increment,
	incrementByAmount,
	setInputValue,
	reset,
} from './../../redux/counter';

export default function Home() {
	const dispatch = useDispatch();
	const inputValue = useRef(null);

	const { count } = useSelector((state) => state.counter);

	const handleInput = (value) => {
		inputValue.current.value !== '' && dispatch(setInputValue(parseInt(value)));
	};
	return (
		<div>
			<Input inputRef={inputValue} />
			<Button
				variant='outlined'
				size='large'
				color='secondary'
				onClick={() => handleInput(inputValue.current.value)}>
				Accept input value
			</Button>
			<Grid>
				<span>{count}</span>
				{count !== 0 && (
					<Button
						onClick={() => dispatch(reset())}
						variant='outlined'
						size='large'
						color='secondary'>
						Reset
					</Button>
				)}
			</Grid>
			<Button
				variant='outlined'
				size='large'
				color='secondary'
				onClick={() => dispatch(increment())}>
				Increment
			</Button>
			<Button
				variant='outlined'
				size='large'
				color='secondary'
				onClick={() => dispatch(decrement())}>
				Decrement
			</Button>
			<Button
				variant='outlined'
				size='large'
				color='secondary'
				onClick={() => dispatch(incrementByAmount(33))}>
				increment By Amount
			</Button>
		</div>
	);
}
