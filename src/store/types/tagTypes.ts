import { Tag } from '../reducers/tagReducer';

export enum TagActionTypes {
    ADD_TAG = 'ADD_TAGS',
    REMOVE_TAG = 'REMOVE_TAG',
    SELECT_TAG = 'SELECT_TAG',
    DELETE_ALL_TAGS = 'DELETE_ALL_TAGS',
}

export const actionAddTag = (payload: Tag) => ({ type: TagActionTypes.ADD_TAG, payload });
export const actionRemoveTag = (payload: Tag) => ({ type: TagActionTypes.REMOVE_TAG, payload });
export const actionSelectTag = (payload: Tag) => ({ type: TagActionTypes.SELECT_TAG, payload });
export const actionDeleteAllTags = (payload: Tag[]) => ({ type: TagActionTypes.DELETE_ALL_TAGS, payload });

export type TagActions =
    ReturnType<typeof actionAddTag> |
    ReturnType<typeof actionRemoveTag> |
    ReturnType<typeof actionSelectTag>
    // ReturnType<typeof actionDeleteAllTags>
