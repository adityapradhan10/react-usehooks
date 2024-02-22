import { useBoolean } from "react-usehooks";

export default function App() {
  const { value, toggle, setTrue, setFalse } = useBoolean();

  return (
    <>
      <p>Value: {value}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </>
  );
}
