import { useState } from 'react';

export function useCounter(intialCounter = 1) {
	const [counter, setCounter] = useState(intialCounter);

	const increment = (add = 1) => {
		setCounter(counter + add);
	};

	const decrement = (subtract = 1) => {
		setCounter(counter - subtract);
	};

	const reset = () => {
		setCounter(intialCounter);
	};

	return { counter, increment, decrement, reset };
}
