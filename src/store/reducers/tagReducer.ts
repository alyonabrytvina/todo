import { ActionTypes, TagActionTypes } from '../types/tagTypes';

export interface TagsState{
    tags: Tag[]
}

export interface Tag{
    tag: string,
    id: string,
}

const initialState: TagsState = {
  tags: [],
};

export function tagReducer(state = initialState, action : ActionTypes): TagsState {
  switch (action.type) {
    case TagActionTypes.ADD_TAG:
      return {
        ...state,
        tags: [action.payload, ...state.tags],
      };
    case TagActionTypes.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.id !== action.payload.id),
      };
  }
  return state;
}
