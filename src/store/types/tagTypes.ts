import * as actionsObj from '../actions/tagObjAction';

export enum TagActionTypes {
    ADD_TAG = 'ADD_TAGS',
    REMOVE_TAG = 'REMOVE_TAG',
    SELECT_TAG = 'SELECT_TAG',
    DELETE_ALL_TAGS = 'DELETE_ALL_TAGS',
}

type inferValueTypes<T> = T extends { [key: string]: infer U} ? U : never;
type TagActionsObj = ReturnType<inferValueTypes<typeof actionsObj>>

type ActionArrayPayload = {
    type: TagActionTypes.DELETE_ALL_TAGS,
    payload: []
}

export type TagActions = TagActionsObj|ActionArrayPayload;
