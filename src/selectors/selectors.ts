import { createSelector } from 'reselect';
import { RootState } from '../store/store';
import { Options } from '../store/reducers/filterReducer';

export const selector = createSelector(
  (state: RootState) => state.filter.selectedOption,
  (state: RootState) => state.tag.tags,
  (state: RootState) => state.todo.todos,
  (selectedOption, tags, todos) => todos.filter((todo) => {
    if (selectedOption === Options.Active) {
      return !todo.isCompleted;
    } if (selectedOption === Options.Completed) {
      return todo.isCompleted;
    } if (selectedOption === Options.All) {
      return todo;
    }
  }).filter((todo) => {
    const selectedTags = tags.filter((tag) => tag.isSelected).map((tag) => tag.id);
    if (selectedTags.length) {
      return selectedTags.find((id) => todo.tagsId.includes(id));
    }
    return todo;
  }),
);
