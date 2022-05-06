import { Todo } from '../reducers/todoReducer';

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'UPDATE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    SEARCH_TODO = 'SEARCH_TODO',
    ADD_TAGS_ID = 'ADD_TAGS_ID',
    ATTACH_TODO = 'ATTACH_TODO',
    DELETE_ALL_TODOS = 'DELETE_ALL_TODOS',
}

export const actionAddTodo = (payload: Todo) => ({ type: TodoActionTypes.ADD_TODO, payload });
export const actionDeleteTodo = (payload: Todo) => ({ type: TodoActionTypes.DELETE_TODO, payload });
export const actionEditTodo = (payload: Todo) => ({ type: TodoActionTypes.EDIT_TODO, payload });
export const actionCompleteTodo = (payload: Todo) => ({ type: TodoActionTypes.COMPLETE_TODO, payload });
export const actionSearchTodo = (payload: Todo) => ({ type: TodoActionTypes.SEARCH_TODO, payload });
export const actionAddTagsId = (payload: Todo) => ({ type: TodoActionTypes.ADD_TAGS_ID, payload });
export const actionAttachTodo = (payload: Todo) => ({ type: TodoActionTypes.ATTACH_TODO, payload });
export const actionDeleteALlTodos = (payload: Todo) => ({ type: TodoActionTypes.DELETE_ALL_TODOS, payload });

export type ActionTypes = ReturnType<typeof actionAddTodo> |
    ReturnType<typeof actionDeleteTodo> |
    ReturnType<typeof actionEditTodo> |
    ReturnType<typeof actionCompleteTodo> |
    ReturnType<typeof actionSearchTodo> |
    ReturnType<typeof actionAddTagsId> |
    ReturnType<typeof actionAttachTodo> |
    ReturnType<typeof actionDeleteALlTodos>
