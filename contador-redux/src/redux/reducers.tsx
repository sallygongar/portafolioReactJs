import { combineReducers } from 'redux';

// Define el tipo del estado inicial
interface CounterState{
  count: number;
}

// Define el estado inicial
const initialCounterState: CounterState ={
  count: 0
}

// Define las opciones
type CounterAction = { type: 'INCREMENT' } | {type: 'DECREMENT'};

// Crea el reducer
const counterReducer = (state = initialCounterState, action: CounterAction ) : CounterState =>{
  switch (action.type){
    case 'INCREMENT':
      return {...state, count: state.count + 1 };
    case 'DECREMENT':
      return {...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Combina los reducers
const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer;