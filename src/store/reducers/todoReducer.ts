import { types } from '../types/todoTypes';

export interface TodoState {
    todos: Todo[]
}

export interface Todo {
    todo: string,
    complete: boolean,
    id: any,
}

const initialState: TodoState = {
  todos: [],
};

export type Action = {
    type: string;
    payload: Todo;
};

export function todoReducer(state = initialState, action: Action) {
  const todos = state.todos.filter((todo) => todo.id !== action.payload);
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos,
      };
  }
  return state;
}
