import { types } from '../types/todoTypes';

export interface TodoState {
    todos: Todo[]
}

export interface Todo {
    todo: string,
    complete: boolean,
}

const initialState: TodoState = {
  todos: [],
};

export type Action = {
    type: string;
    payload: Todo[]
};

export function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };
  }
  return state;
}
