import { useState } from 'react';
import { FunctionVoid } from '../utils';

interface useBooleanOutput {
  value: boolean;
  setTrue: FunctionVoid;
  setFalse: FunctionVoid;
  toggle: FunctionVoid;
}

export function useBoolean(defaultValue?: boolean): useBooleanOutput {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((value) => !value);

  return { value, setTrue, setFalse, toggle };
}
