import './App.css';
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="body-outline">
        <div className="count-outline">
          <h3>Count : {count}</h3>
        </div>
          <div className="btn-outline">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
      </div>
    </>
  );
};

export default App;
