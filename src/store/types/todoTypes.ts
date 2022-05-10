import * as actionsObj from '../actions/todoObjAction';

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'UPDATE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    SEARCH_TODO = 'SEARCH_TODO',
    ADD_TAGS_ID = 'ADD_TAGS_ID',
    ATTACH_TODO = 'ATTACH_TODO',
    DELETE_ALL_TODOS = 'DELETE_ALL_TODOS',
    DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS',
}

type ActionArrayPayload = {
    type: TodoActionTypes.DELETE_ALL_TODOS | TodoActionTypes.DELETE_COMPLETED_TODOS,
    payload: []
}

type inferValueTypes<T> = T extends { [key: string]: infer U} ? U : never;
export type TodoActionsObj = ReturnType<inferValueTypes<typeof actionsObj>>

export type TodoActions = TodoActionsObj | ActionArrayPayload;
