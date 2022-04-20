import { ActionTypes, TodoActionTypes } from '../types/todoTypes';

export interface TodoState {
    todos: Todo[]
}

export interface Todo {
    todo: string,
    complete: boolean,
    id: any,
    search: boolean,
  searchedValue: string,
}

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state = initialState, action: ActionTypes): TodoState {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodoActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, complete: action.payload.complete,
        } : todo)),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, todo: action.payload.todo,
        } : todo)),
      };
    case TodoActionTypes.SEARCH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, search: action.payload.search,
        } : todo)),
      };
  }
  return state;
}
