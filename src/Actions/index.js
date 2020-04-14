export function getAllJournals() {
	return async function (dispatch) {
		const raw = await fetch('http://localhost:3001/journals');
		const data = await raw.json();
		console.log('data', data);
		return dispatch(getAllJournalsAction(data));
	};
}

function getAllJournalsAction(data) {
	return {
		type: 'GET_ALL_JOURNALS',
		payload: data
	};
}

export const setActive = (name) => ({
	type: 'SET_ACTIVE',
	payload: name
});
