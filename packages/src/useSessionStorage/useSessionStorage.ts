import { useStorage } from "../useStorage/useStorage";

export function useSessionStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] {
	return useStorage(key, initialValue, window.sessionStorage);
}
