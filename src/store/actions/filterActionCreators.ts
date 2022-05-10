import { FilterState, FilterActionTypes } from '../reducers/filterReducer';

export const actionSetSelectedFilter = (payload: FilterState) => ({ type: FilterActionTypes.SET_SELECTED_FILTER, payload });
