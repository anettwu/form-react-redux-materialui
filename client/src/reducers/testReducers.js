const initialState = {
	text: '',
	start: 'teststart',
};

const test = (state = initialState, action) => {
	switch (action.type) {
		case 'FIRE': {
			return { ...state, text: action.payload.text };
		}
		default: {
			return { ...state };
		}
	}
};

export default test;
