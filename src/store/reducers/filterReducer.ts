import { TagsState } from './tagReducer';
import { ActionTypes, FilterActionTypes } from '../types/filterTypes';

const initialState = {
  selectedOption: 'all',
};

export interface FilterState{
  selectedOption: string,
}

export function filterReducer(state = initialState, action : ActionTypes) {
  switch (action.type) {
    case FilterActionTypes.SET_SELECTED_FILTER:
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
      };
  }
  return state;
}
