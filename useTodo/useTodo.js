import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

export function useTodo() {
	const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const onNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add todo',
			payload: todo,
		};

		dispatch(action);
	};

	const onRemoveTodo = (id) => {
		dispatch({
			type: '[TODO] Remove todo',
			payload: id,
		});
	};

	const onToggleTodo = (id) => {
		dispatch({
			type: '[TODO] Toggle todo',
			payload: id,
		});
	};

	return {
		todos,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
		onNewTodo,
		onRemoveTodo,
		onToggleTodo,
	};
}

export function initTodos() {
	return JSON.parse(localStorage.getItem('todos')) || [];
}
