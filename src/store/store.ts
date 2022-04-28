import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { tagReducer } from './reducers/tagReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  tag: tagReducer,
});

export const store = createStore(
  rootReducer,
);

export type RootState = ReturnType<typeof rootReducer>;
