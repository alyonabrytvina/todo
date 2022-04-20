import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';

interface Props{
    handleSearch: (searchValue: string) => void,
}

export const Search: React.FC<Props> = ({ handleSearch }) => {
  const StyledInputBase = {
    color: 'inherit',
    cursor: 'pointer',
    width: '20%',
    height: '40px',
  };

  return (
    <OutlinedInput
      sx={StyledInputBase}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      endAdornment={(
        <InputAdornment position="end">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
)}
    />
  );
};
