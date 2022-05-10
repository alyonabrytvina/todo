import { Tag } from '../reducers/tagReducer';
import { TagActionTypes } from '../types/tagTypes';

export const actionAddTag = (payload: Tag) => ({ type: TagActionTypes.ADD_TAG, payload });
export const actionRemoveTag = (payload: Tag) => ({ type: TagActionTypes.REMOVE_TAG, payload });
export const actionSelectTag = (payload: Tag) => ({ type: TagActionTypes.SELECT_TAG, payload });
