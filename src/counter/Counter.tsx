import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAppSelector, useAppDispatch } from '../app/hooks'
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';

export function Counter() {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    style={{paddingRight: 20}}
                >
                    increment
                </button>
                <span style={{paddingRight: 20}}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div>
                <input
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
                <button
                    aria-label="increment by amount"
                    onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
                >
                    IncrementByAmount
                </button>
                <button
                    aria-label="increment by amount, Async"
                    onClick={() => dispatch(incrementAsync(Number(amount) || 0))}
                >
                    Increment Async
                </button>
            </div>
        </div>
    );
}