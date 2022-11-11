import React from 'react';
import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <span>Find contacts by name</span>
      <Input type="text" name="filter" onChange={changeFilter} />
    </>
  );
};
