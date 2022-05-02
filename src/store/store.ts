import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { tagReducer } from './reducers/tagReducer';
import { loadState, saveState } from '../utils/localStorage';

const rootReducer = combineReducers({
  todo: todoReducer,
  tag: tagReducer,
});

export const store = createStore(
  rootReducer,
  loadState(),
);

console.log(loadState());

store.subscribe(() => {
  saveState(store.getState());
  console.log(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
