const setTest = (text) => (dispatch) => {
	dispatch({
		type: 'FIRE',
		payload: { text },
	});
};

export default setTest;
