import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0); // useState for real time synchronization with JS
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
