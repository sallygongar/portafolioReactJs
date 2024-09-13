import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'

//Crea el componente
 
const Counter: React.FC = () => {
  const count = useSelector((state: RootState ) => state.counter.count);
  const dispatch = useDispatch();

  return(
    <div>
       <h1>{count}</h1> 
       <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
       <button onClick={() => dispatch({type: 'DECREMENT'})}>Decremento</button>
    </div>
  )
}

export default Counter;