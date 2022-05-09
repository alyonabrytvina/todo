import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  Drawer, Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { actionRemoveTag, actionSelectTag } from '../../store/types/tagTypes';

export const Tags: React.FC = () => {
  const dispatch = useDispatch();
  const tagsState = UseTypedSelector((state) => state.tag.tags);

  const onTagClick = (id: string, tagDescription: string): void => {
    tagsState.forEach((tag) => {
      if (tag.id === id) {
        dispatch(actionSelectTag({ id, tagDescription, isSelected: !tag.isSelected }));
      }
    });
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Typography
        sx={{
          minHeight: '65px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '100px',
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
          key={tag.id}
          sx={{
            m: '5px',
            maxWidth: '100px',
            minWidth: '100px',
          }}
        >
          <Chip
            label={tag.tagDescription}
            onClick={() => onTagClick(tag.id, tag.tagDescription)}
            onDelete={() => dispatch(actionRemoveTag(tag))}
            color={tag.isSelected ? 'secondary' : 'primary'}
            sx={{
              '&:hover': {
                color: (theme) => `${theme.palette.primary.main}`,
                borderColor: (theme) => `${theme.palette.primary.main}`,
              },
            }}
            variant="outlined"
          />
        </Stack>
      ))}
    </Drawer>
  );
};
