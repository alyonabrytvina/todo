import { ActionTypes, TodoActionTypes } from '../types/todoTypes';

export interface TodoState {
    todos: Todo[],
}

export interface TagsId {
  tagId: string,
}

export interface Todo {
    todo: string,
    completed: boolean,
    id: any,
    searched: boolean,
    searchedValue: string,
    tagsId: TagsId[]
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
    case TodoActionTypes.COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, completed: action.payload.completed,
        } : todo)),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, todo: action.payload.todo,
        } : todo)),
      };
    case TodoActionTypes.SEARCHED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, searched: action.payload.searched,
        } : todo)),
      };
    case TodoActionTypes.ADD_TAGS_ID:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, tagsId: [...action.payload.tagsId],
        } : todo)),
      };
  }
  return state;
}
