export function todoReducer(initialState = [], action) {
	switch (action.type) {
		case '[TODO] Add todo':
			return [action.payload, ...initialState];

		case '[TODO] Remove todo':
			return initialState.filter((todo) => todo.id !== action.payload);

		case '[TODO] Toggle todo':
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		default:
			return initialState;
	}
}
