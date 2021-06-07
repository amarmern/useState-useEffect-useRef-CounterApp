import { useEffect, useRef, useState } from "react";
import "./styles.css";
import randomColor from "randomcolor";

export default function App() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState();

  const inputRef = useRef();

  const increment = () => {
    setCount((currCnt) => currCnt + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setColor(randomColor());
    inputRef.current.focus();
  }, [count]);

  return (
    <div className="App">
      <p style={{ backgroundColor: `${color}` }}>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>reset </button>
      <div>
        <input
          ref={inputRef}
          type="range"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
    </div>
  );
}
