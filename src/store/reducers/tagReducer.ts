import { TagActions, TagActionTypes } from '../types/tagTypes';

export interface TagsState{
    tags: Tag[]
}

export interface Tag{
    tagDescription: string,
    id: string,
    isSelected: boolean,
}

const initialState: TagsState = {
  tags: [],
};

export function tagReducer(state = initialState, action : TagActions): TagsState {
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
    case TagActionTypes.SELECT_TAG:
      return {
        ...state,
        tags: state.tags.map((tag) => (tag.id === action.payload.id ? {
          ...tag, isSelected: action.payload.isSelected,
        } : tag)),
      };
    case TagActionTypes.DELETE_ALL_TAGS:
      return {
        ...state,
        tags: [],
      };
  }
  return state;
}
