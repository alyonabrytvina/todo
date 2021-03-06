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
    color="secondary"
    onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search…"
    endAdornment={(
      <InputAdornment position="end">
        <IconButton>
          <SearchIcon color="secondary" />
        </IconButton>
      </InputAdornment>
)}
  />
);
