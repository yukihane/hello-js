import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};
