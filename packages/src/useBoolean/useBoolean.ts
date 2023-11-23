import { useState } from "react";

interface ReturnType {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export function useBoolean(defaultValue?: boolean): ReturnType {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((value) => !value);

  return { value, setTrue, setFalse, toggle };
}
