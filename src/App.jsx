import './App.css'

import { useState } from "react";
/*  useState */
export default function MyApp() {
  return (
    <div>
      <h1> Contadores que se actualiza separado</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} time
    </button>
  );
}