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
  console.log(todoValue.tagsId, tagsId);
  const tagsState = UseTypedSelector((state) => state.tag.tags);
  const tags = tagsState.filter((tag: Tag) => tagsId.includes(tag.id));

  const onTagClick = (id: string): void => {
    setHasTag(!hasTag);
    setTagsId((tagsId) => [...tagsId, id]);
    dispatch(actionAddTag({ tagDescription: tagName, id }));
  };

  useEffect(() => {
    dispatch(actionAddTagsId({ ...todoValue, tagsId }));
  }, [tagsId]);

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
            color="success"
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
            onChange={(e) => setTagName(e.target.value)}
          />
          <IconButton onClick={() => onTagClick(uuidv4())}>
            <CheckIcon color="success" />
          </IconButton>
        </>
      )}
    </>
  );
};
