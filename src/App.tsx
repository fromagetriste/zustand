import "./App.css";
import { useConterStore } from "./store/CounterStore";

function App() {
  const { count, increase, decrease, reset } = useConterStore();
  return (
    <div className="wrapper">
      <h1 className="My-Counter">My Counter</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons-wrapper">
        <button className="counter-button" onClick={increase}>
          +
        </button>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
      </div>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
