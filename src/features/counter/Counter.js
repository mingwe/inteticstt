import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { addCategory, removeCategory, toggleCategory } from '../../redux/filtersSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(addCategory('jew'))}
        >
          filter jew
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(addCategory('jacket'))}
        >
          filter jacket
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(removeCategory('jew'))}
        >
          remove jew
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(addCategory('electronics'))}
        >
          filter electronics
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(removeCategory('electronics'))}
        >
          remove electronics
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(toggleCategory('electronics'))}
        >
          toggle electronics
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
