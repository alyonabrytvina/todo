import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  Drawer, Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { actionRemoveTag, actionSelectTag } from '../../store/types/tagTypes';

const StyledChip = styled(Chip)(({ theme }) => ({
  '& .MuiChip-label': {

    '&:hover': {
      color: `${theme.palette.primary.main}`,
      borderColor: `${theme.palette.primary.main}`,
    },
  },
}));

export const Tags: React.FC = () => {
  const tagsState = UseTypedSelector((state) => state.tag.tags);
  const dispatch = useDispatch();

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
            display: 'flex',
            alignItems: 'center',
            margin: '5px',
            maxWidth: '100px',
            minWidth: '100px',
          }}
        >
          <StyledChip
            label={tag.tagDescription}
            onClick={() => onTagClick(tag.id, tag.tagDescription)}
            onDelete={() => dispatch(actionRemoveTag(tag))}
            color={tag.isSelected ? 'secondary' : 'primary'}
            variant="outlined"
          />
        </Stack>
      ))}
    </Drawer>
  );
};
