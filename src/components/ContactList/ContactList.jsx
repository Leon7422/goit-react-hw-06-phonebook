import React from 'react';
import PropTypes from 'prop-types';
import { UserList } from './ContactList.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { ContactItem } from './ContactItem/ContactItem';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <UserList>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </UserList>
  );
};

ContactList.propTypes = {
  actualData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
