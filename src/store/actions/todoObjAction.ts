import { Todo } from '../reducers/todoReducer';
import { TodoActionTypes } from '../types/todoTypes';

export const actionAddTodo = (payload: Todo) => ({ type: TodoActionTypes.ADD_TODO, payload });
export const actionDeleteTodo = (payload: Todo) => ({ type: TodoActionTypes.DELETE_TODO, payload });
export const actionEditTodo = (payload: Todo) => ({ type: TodoActionTypes.EDIT_TODO, payload });
export const actionCompleteTodo = (payload: Todo) => ({ type: TodoActionTypes.COMPLETE_TODO, payload });
export const actionSearchTodo = (payload: Todo) => ({ type: TodoActionTypes.SEARCH_TODO, payload });
export const actionAddTagsId = (payload: Todo) => ({ type: TodoActionTypes.ADD_TAGS_ID, payload });
export const actionAttachTodo = (payload: Todo) => ({ type: TodoActionTypes.ATTACH_TODO, payload });
