import { FilterActions, FilterActionTypes } from '../types/filterTypes';

export enum Options {
  Active ='active',
  Completed = 'completed',
  All = 'all'
}

const initialState = {
  selectedOption: Options.All as string,
};

export interface FilterState{
  selectedOption: string,
}

export function filterReducer(state = initialState, action : FilterActions) {
  switch (action.type) {
    case FilterActionTypes.SET_SELECTED_FILTER:
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
      };
  }
  return state;
}
