import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemIcon, IconButton, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { Todo } from '../../store/reducers/todoReducer';
import {
  actionCompleteTodo, actionDeleteTodo, actionEditTodo,
} from '../../store/types/todoTypes';

interface Props {
    todo: Todo
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [todoDescription, setTodoDescription] = useState<string>(todo.todo);
  const [isAttached, setIsAttached] = useState<boolean>(false);

  const onRemove = (): void => {
    const removeItem: Todo = { todo: todo.todo, complete: todo.complete, id: todo.id };
    dispatch(actionDeleteTodo(removeItem.id));
  };

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
    dispatch(actionCompleteTodo({ todo: todo.todo, complete: event.target.checked, id: todo.id }));
  };

  const onEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const onChange = (): void => {
    setIsEdit(!isEdit);
    if (todoDescription.length !== 0) {
      dispatch(actionEditTodo({ todo: todoDescription, complete: todo.complete, id: todo.id }));
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'flex',
        width: '100%',
        height: '60px',
        backgroundColor: '#e8e8e8',
        padding: '20px',
        position: isAttached ? 'absolute' : 'static',
        top: '0',
      }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          onChange={onToggle}
          color="secondary"
        />
      </ListItemIcon>
      {!isEdit ? (
        <>
          <ListItemText
            primary={todo.todo}
            sx={{
              width: '800px',
              textDecoration: isChecked ? 'line-through' : 'none',
            }}
          />
          <IconButton onClick={onEdit}>
            <EditIcon color="primary" />
          </IconButton>
        </>

      ) : (
        <>
          <TextField
            variant="standard"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
            sx={{ width: '800px' }}
          />
          <IconButton onClick={onChange}>
            <CheckIcon color="secondary" />
          </IconButton>
        </>
      )}
      <IconButton onClick={() => setIsAttached(!isAttached)}>
        <AttachFileIcon color="primary" />
      </IconButton>
      <IconButton onClick={onRemove}>
        <DeleteIcon color="primary" />
      </IconButton>
    </ListItem>
  );
};
