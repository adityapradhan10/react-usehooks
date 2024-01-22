import { useStorage } from "../useStorage/useStorage";

export function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
	return useStorage(key, initialValue, window.localStorage);
}
