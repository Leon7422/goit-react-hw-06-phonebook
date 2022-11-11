import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/action';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
