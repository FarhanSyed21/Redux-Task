import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementByHandler = () => {
    dispatch({ type: "increment5" });
  };
  const decrementByHandler = () => {
    dispatch({ type: "decrement5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>IncrementBy2</button>
        <button onClick={decrementHandler}>DecrementBy2</button>
        <button onClick={incrementByHandler}>IncrementBy5</button>
        <button onClick={decrementByHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
