import { useState } from "react";
import { FunctionVoid } from "../utils";

interface OutputType {
  value: boolean;
  setTrue: FunctionVoid;
  setFalse: FunctionVoid;
  toggle: FunctionVoid;
}

export function useBoolean(defaultValue?: boolean): OutputType {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((value) => !value);

  return { value, setTrue, setFalse, toggle };
}
