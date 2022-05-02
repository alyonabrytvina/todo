import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  Drawer, Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { actionRemoveTag } from '../../store/types/tagTypes';

interface Tag {
    id: string;
    tagDescription: string;
}

interface Props {
    handleTag: (tag: Tag) => void,
}

const useStyles = makeStyles({
  tag: {
    '&:hover': {
      color: '#00C9A7',
      borderColor: '#00C9A7',
    },
  },
});

export const Tags: React.FC<Props> = ({ handleTag }) => {
  const tagsState = UseTypedSelector((state) => state.tag.tags);
  const dispatch = useDispatch();
  const classes = useStyles();

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
            display: 'flex',
            alignItems: 'center',
            margin: '5px',
            maxWidth: '100px',
            minWidth: '100px',
          }}
        >
          <Chip
            label={tag.tagDescription}
            onClick={() => handleTag({ id: tag.id, tagDescription: tag.tagDescription })}
            onDelete={() => dispatch(actionRemoveTag(tag))}
            variant="outlined"
            className={classes.tag}
          />
        </Stack>
      ))}
    </Drawer>
  );
};
