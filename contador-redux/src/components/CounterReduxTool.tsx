import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from '../redux-toolkit/counterSlice';

function CounterReduxTool(){
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

    return(
      <div>
        <h1>{count}</h1> 
       <button aria-label="Incrementa valor" onClick={() => dispatch(increment())}>Increment</button>
       <button aria-label="Decrementa valor" onClick={() => dispatch(decrement())}>Decremento</button>
      </div>
    )
}

export default CounterReduxTool;