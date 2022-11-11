import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterInputChange = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const checkContactsDublicate = data => {
    const actualContacts = contacts;
    const userData = actualContacts.find(contact => {
      if (contact.name === data.name) {
        return data.name;
      }
      return false;
    });
    return userData;
  };

  const formSubmitHandler = data => {
    const userInfo = checkContactsDublicate(data);
    if (userInfo) {
      return alert(`${userInfo.name} is already in contact`);
    }
    // НЕ ПРАЦЮЄ ПЕРЕВІРКА КОНТАКТІВ, ГЛЯНУТИ ЧОМУ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    dispatch(addContact(data.name, data.number));
  };

  const normilezedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(normilezedFilter);
  });

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />

      <h3>Contacts</h3>
      <Filter inputValue={filter} inputChange={filterInputChange} />
      <ContactList actualData={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};
