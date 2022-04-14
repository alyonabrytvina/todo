import {Todo} from "../reducers/todoReducer";

export const types = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO"
}

export const actionAddTodo = (payload: Todo[]) => ({type: types.ADD_TODO, payload});
export const actionDeleteTodo = (payload: Todo[]) => ({type: types.ADD_TODO, payload});
export const actionUpdateTodo = (payload: Todo[]) => ({type: types.UPDATE_TODO, payload});