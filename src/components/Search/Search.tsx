import React from 'react';
import './Search.scss';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';

interface Props{
    handleSearch: (searchValue: string) => void,
}

export const Search: React.FC<Props> = ({ handleSearch }) => (
  <OutlinedInput
    className="search"
    color="success"
    onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search…"
    inputProps={{ 'aria-label': 'search' }}
    endAdornment={(
      <InputAdornment position="end">
        <IconButton>
          <SearchIcon color="success" />
        </IconButton>
      </InputAdornment>
)}
  />
);
