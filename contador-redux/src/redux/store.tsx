import { createStore } from 'redux';
import rootReducer from './reducers';

// Define el tipo del estado global
export type RootState = ReturnType<typeof rootReducer>;

// Crea el store
const store = createStore(rootReducer)

export default store;