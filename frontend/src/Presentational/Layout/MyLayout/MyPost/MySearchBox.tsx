import React from 'react';
import styled from 'styled-components';
import MySearch from '../../../Components/MyComponents/MyPostComponents/MySearch';

function SearchBox() {
  const MySearchBox = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: right;
    align-items: center;
    color: white;
  `;
  return (
    <MySearchBox>
      <MySearch />
    </MySearchBox>
  );
}

export default SearchBox;
