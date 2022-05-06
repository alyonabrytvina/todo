import {
  Checkbox, ListItem,
  ListItemText, ListItemIcon,
  IconButton, TextField,
  ListItemButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import './TodoListItem.scss';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { CreateTag } from '../CreateTag/CreateTag';
import {
  actionAttachTodo, actionCompleteTodo,
  actionDeleteTodo, actionEditTodo,
} from '../../store/types/todoTypes';
import { Todo } from '../../store/reducers/todoReducer';

interface Props {
    todoValue: Todo
}

export const TodoListItem: React.FC<Props> = ({ todoValue }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(todoValue.isCompleted);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [todoDescription, setTodoDescription] = useState<string>(todoValue.todoDescription);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onRemove = (): void => {
    dispatch(actionDeleteTodo({ ...todoValue, id: todoValue.id }));
  };

  useEffect(() => {
    dispatch(actionCompleteTodo({
      ...todoValue, isCompleted: isChecked,
    }));
  }, [isChecked]);

  const onEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onChange();
    }
  };

  const onChange = (): void => {
    onEdit();

    if (todoDescription.length !== 0) {
      dispatch(actionEditTodo({
        ...todoValue, todoDescription,
      }));
    }
  };

  return (
    <>
      <ListItem
        disablePadding
        color={todoValue.isCompleted ? 'secondary' : 'primary'}
        sx={{
          padding: '20px',
          order: todoValue.isAttached ? '-2' : '1',
          wordBreak: 'break-all',
        }}
      >
        <ListItemIcon>
          <Checkbox
            checked={isChecked}
            edge="start"
            onChange={(e) => setIsChecked(e.target.checked)}
            color="secondary"
          />
        </ListItemIcon>
        {!isEdit ? (
          <>
            <ListItemText
              primary={todoValue.todoDescription}
              className={todoValue.isSearched ? 'todo-item-text__searched' : 'todo-item-text'}
              sx={{
                textDecoration: todoValue.isCompleted ? 'line-through' : 'none',
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
              onKeyDown={keyDownHandler}
            />
            <IconButton onClick={onChange}>
              <CheckIcon color="secondary" />
            </IconButton>
          </>
        )}
        <IconButton onClick={() => dispatch(actionAttachTodo({ ...todoValue, isAttached: !todoValue.isAttached }))}>
          <AttachFileIcon color={todoValue.isAttached ? 'secondary' : 'primary'} />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon color="primary" />
        </IconButton>
        <ListItemButton onClick={() => setIsOpen(!isOpen)} color="secondary">
          {isOpen
            ? <ExpandLess />
            : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        sx={{
          display: 'flex',
          justifyContent: 'end',
          order: todoValue.isAttached ? '-2' : '1',
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton>
            <CreateTag todoValue={todoValue} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
