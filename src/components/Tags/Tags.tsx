import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Drawer, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';

export const Tags: React.FC = () => {
  const todosState = UseTypedSelector((state) => state.todo.todos);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
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
      {todosState?.map((todo) => todo.tags?.map((tag) => (
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
            label={tag}
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Stack>
      )))}
    </Drawer>
  );
};
