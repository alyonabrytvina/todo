import React, { useState } from 'react';
import { IconButton, TextField, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTags } from '../../store/types/todoTypes';
import { Todo } from '../../store/reducers/todoReducer';

interface Props {
    todoValue: Todo
}

export const CreateTag: React.FC<Props> = ({ todoValue }) => {
  const dispatch = useDispatch();
  const [hasTag, setHasTag] = useState<boolean>(false);
  const [tagName, setTagName] = useState<string[]>([]);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const onTag = (): void => {
    setHasTag(!hasTag);
    console.log(tagName);
    dispatch(actionAddTags({ ...todoValue, tags: [...tagName] }));
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {todoValue.tags?.map((tag) => (
          <Chip
            className="tag"
            key={uuidv4()}
            label={tag}
            onClick={handleClick}
            onDelete={handleDelete}
            sx={{
              margin: '5px',
            }}
          />
        ))}
      </Stack>
      {!hasTag ? (
        <IconButton onClick={() => setHasTag(!hasTag)}>
          <AddCircleIcon fontSize="medium" color="primary" />
        </IconButton>
      ) : (
        <>
          <TextField
            variant="standard"
            sx={{
              minWidth: '100px',
              marginLeft: '5px',
            }}
            onChange={(e) => setTagName([e.target.value])}
          />
          <IconButton onClick={onTag}>
            <CheckIcon color="success" />
          </IconButton>
        </>
      )}
    </>
  );
};
