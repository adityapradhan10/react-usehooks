import { useCallback, useState } from "react";

export function useStorage<T>(
	key: string,
	initialValue: T,
	adapter: Storage = window.localStorage
): [T, (value: T) => void] {
	const readValue = useCallback(() => {
		const value = adapter.getItem(key);
		if (value) {
			try {
				return JSON.parse(value);
			} catch (e) {
				return value;
			}
		}
		return initialValue;
	}, [key, initialValue]);

	const [state, setState] = useState<T>(readValue);

	const setValue = useCallback((value: T) => {
		if (typeof value === "undefined") adapter.removeItem(key);
		else adapter.setItem(key, JSON.stringify(value));

		setState(value);
	}, []);

	return [state, setValue];
}
