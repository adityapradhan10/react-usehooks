import { useCallback, useState } from "react";
import { FunctionVoid } from "../utils";

interface useBooleanOutput {
	value: boolean;
	setTrue: FunctionVoid;
	setFalse: FunctionVoid;
	toggle: FunctionVoid;
}

export function useBoolean(defaultValue?: boolean): useBooleanOutput {
	const [value, setValue] = useState(!!defaultValue);

	const setTrue = useCallback(() => setValue(true), []);
	const setFalse = useCallback(() => setValue(false), []);
	const toggle = useCallback(() => setValue((value) => !value), []);

	return { value, setTrue, setFalse, toggle };
}
