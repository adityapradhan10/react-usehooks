// Void function
export type FunctionVoid = () => void;

// Any function
export type FunctionArgs<Args extends any[] = any[], Return = void> = (
  ...args: Args
) => Return;
