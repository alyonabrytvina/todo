import { FilterState } from '../reducers/filterReducer';

export enum FilterActionTypes {
    SET_SELECTED_FILTER = 'SET_SELECTED_FILTER',
}

export const actionSetSelectedFilter = (payload: FilterState) => ({ type: FilterActionTypes.SET_SELECTED_FILTER, payload });

export type ActionTypes =
    ReturnType<typeof actionSetSelectedFilter>
