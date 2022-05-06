import React, { useEffect, useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../store/reducers/todoReducer';
import { actionAddTag } from '../../store/types/tagTypes';
import { actionAddTagsId } from '../../store/types/todoTypes';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { Tag } from '../../store/reducers/tagReducer';

interface Props {
    todoValue: Todo
}

export const CreateTag: React.FC<Props> = ({ todoValue }) => {
  const dispatch = useDispatch();
  const [hasTag, setHasTag] = useState<boolean>(false);
  const [tagName, setTagName] = useState<string>('');

  const [tagsId, setTagsId] = useState<string[]>(todoValue.tagsId);
  const tagsState = UseTypedSelector((state) => state.tag.tags);
  const tags = tagsState.filter((tag: Tag) => tagsId.includes(tag.id));

  const onTagClick = (id: string): void => {
    setHasTag(!hasTag);
    setTagsId((tagsId) => [...tagsId, id]);
    dispatch(actionAddTag({ tagDescription: tagName, id, isSelected: false }));
  };

  useEffect(() => {
    dispatch(actionAddTagsId({ ...todoValue, tagsId }));
  }, [tagsId]);

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onTagClick(uuidv4());
    }
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
        {tags.map((tag) => (
          <Chip
            variant="outlined"
            key={tag.id}
            label={`#${tag.tagDescription}`}
            sx={{
              cursor: 'pointer',
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
            onKeyDown={keyDownHandler}
            sx={{
              marginLeft: '5px',
            }}
            onChange={(e) => setTagName(e.target.value)}
          />
          <IconButton onClick={() => onTagClick(uuidv4())}>
            <CheckIcon color="secondary" />
          </IconButton>
        </>
      )}
    </>
  );
};
