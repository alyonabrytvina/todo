import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { tagReducer } from './reducers/tagReducer';
import { loadState, saveState } from '../utils/localStorage';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  tag: tagReducer,
  filter: filterReducer,
});

export const store = createStore(
  rootReducer,
  loadState(),
);

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
