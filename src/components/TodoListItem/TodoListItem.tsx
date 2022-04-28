import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemIcon, IconButton, TextField, ListItemButton,
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
  actionCompleteTodo, actionDeleteTodo, actionEditTodo,
} from '../../store/types/todoTypes';
import { Todo } from '../../store/reducers/todoReducer';

interface Props {
    todoValue: Todo
}

export const TodoListItem: React.FC<Props> = ({ todoValue }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(todoValue.completed);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [todoDescription, setTodoDescription] = useState<string>(todoValue.todo);
  const [isAttached, setIsAttached] = useState<boolean>(false);

  const [hasTag, setHasTag] = useState<boolean>(false);
  const [tagName, setTagName] = useState<string>('');

  const [open, setOpen] = useState<boolean>(false);

  const onRemove = (): void => {
    dispatch(actionDeleteTodo(todoValue.id));
  };

  useEffect(() => {
    dispatch(actionCompleteTodo({
      ...todoValue, completed: isChecked,
    }));
  }, [isChecked]);

  const onEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const onChange = (): void => {
    onEdit();

    if (todoDescription.length !== 0) {
      dispatch(actionEditTodo({
        ...todoValue, todo: todoDescription,
      }));
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        disablePadding
        className={todoValue.completed ? 'TodoListItem__item--unchecked' : 'TodoListItem__item--checked'}
        sx={{
          // display: 'flex',
          width: '100%',
          // height: '60px',
          background: todoValue.searched ? '#FFCC00' : '#e8e8e8',
          padding: '20px',
          order: isAttached ? '-2' : '1',
        }}
      >
        <ListItemIcon>
          <Checkbox
            checked={isChecked}
            edge="start"
            onChange={(e) => setIsChecked(e.target.checked)}
            color="success"
          />
        </ListItemIcon>
        {!isEdit ? (
          <>
            <ListItemText
              primary={todoValue.todo}
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
              <CheckIcon color="success" />
            </IconButton>
          </>
        )}
        <IconButton onClick={() => setIsAttached(!isAttached)}>
          <AttachFileIcon color={isAttached ? 'success' : 'primary'} />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon color="primary" />
        </IconButton>
        <ListItemButton onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <CreateTag todoValue={todoValue} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
