import { ActionTypes, TodoActionTypes } from '../types/todoTypes';

export interface TodoState {
    todos: Todo[],
}

export interface TagsId {
  tagId: string,
}

export interface Todo {
    todoDescription: string,
    isCompleted: boolean,
    id: any,
    isSearched: boolean,
    isAttached: boolean,
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
    case TodoActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, isCompleted: action.payload.isCompleted,
        } : todo)),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, todoDescription: action.payload.todoDescription,
        } : todo)),
      };
    case TodoActionTypes.SEARCH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, isSearched: action.payload.isSearched,
        } : todo)),
      };
    case TodoActionTypes.ADD_TAGS_ID:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, tagsId: [...action.payload.tagsId],
        } : todo)),
      };
    case TodoActionTypes.ATTACH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? {
          ...todo, isAttached: action.payload.isAttached,
        } : todo)),
      };
  }
  return state;
}
