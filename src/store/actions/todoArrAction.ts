import { TodoActionTypes } from '../types/todoTypes';

export const actionDeleteAllTodos = () => ({ type: TodoActionTypes.DELETE_ALL_TODOS });
export const actionDeleteCompletedTodos = () => ({ type: TodoActionTypes.DELETE_COMPLETED_TODOS });
