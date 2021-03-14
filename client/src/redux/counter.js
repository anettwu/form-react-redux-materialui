import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		setInputValue: (state, action) => {
			state.count += action.payload;
		},
		incrementByAmount: (state, action) => {
			const xx = 2;
			state.count += action.payload + xx;
		},
		reset: (state) => {
			state.count = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	increment,
	decrement,
	setInputValue,
	incrementByAmount,
	reset,
} = counterSlice.actions;

export default counterSlice.reducer;
