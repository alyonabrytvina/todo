import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Drawer, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { actionRemoveTag } from '../../store/types/tagTypes';
import { Todo } from '../../store/reducers/todoReducer';

export const Tags: React.FC = () => {
  const dispatch = useDispatch();
  const tagsState = UseTypedSelector((state) => state.tag.tags);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Typography
        sx={{
          width: '100px',
          minHeight: '65px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        variant="h5"
        color="primary"
      >
        Tags
      </Typography>
      <Divider />
      {tagsState?.map((tag) => (
        <Stack
          direction="row"
          spacing={1}
          key={uuidv4()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: '5px',
          }}
        >
          <Chip
            label={tag.tag}
            onClick={handleClick}
            onDelete={() => dispatch(actionRemoveTag(tag))}
          />
        </Stack>
      ))}
    </Drawer>
  );
};
