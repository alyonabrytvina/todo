import * as actions from '../actions/filterActionCreators';

type inferValueTypes<T> = T extends { [key: string]: infer U} ? U : never;
export type FilterActions = ReturnType<inferValueTypes<typeof actions>>
