import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  padding: 0px 10px 0px 10px;
  width: 530px;
  height: 50px;
  border: 1px solid;
  border-radius: 35px;
  font-size: 15px;
  @media (max-width: 630px) {
    width: 250px;
    height: 35px;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #999;
`;

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="חיפוש"
            />
        </SearchContainer>
    );
};

export default SearchBar;
