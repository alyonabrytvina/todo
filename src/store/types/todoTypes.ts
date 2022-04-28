import { Todo } from '../reducers/todoReducer';

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'UPDATE_TODO',
    COMPLETED_TODO = 'COMPLETED_TODO',
    SEARCHED_TODO = 'SEARCHED_TODO',
    ADD_TAGS_ID = 'ADD_TAGS_ID',
}

export const actionAddTodo = (payload: Todo) => ({ type: TodoActionTypes.ADD_TODO, payload });
export const actionDeleteTodo = (payload: Todo) => ({ type: TodoActionTypes.DELETE_TODO, payload });
export const actionEditTodo = (payload: Todo) => ({ type: TodoActionTypes.EDIT_TODO, payload });
export const actionCompleteTodo = (payload: Todo) => ({ type: TodoActionTypes.COMPLETED_TODO, payload });
export const actionSearchTodo = (payload: Todo) => ({ type: TodoActionTypes.SEARCHED_TODO, payload });
export const actionAddTagsId = (payload: Todo) => ({ type: TodoActionTypes.ADD_TAGS_ID, payload });

export type ActionTypes = ReturnType<typeof actionAddTodo> |
    ReturnType<typeof actionDeleteTodo> |
    ReturnType<typeof actionEditTodo> |
    ReturnType<typeof actionCompleteTodo> |
    ReturnType<typeof actionSearchTodo> |
    ReturnType<typeof actionAddTagsId>
