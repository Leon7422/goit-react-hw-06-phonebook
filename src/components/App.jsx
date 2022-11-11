import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Phonebook = () => {
  const filteredContacts = useSelector(getFilter);
  const actualContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkContactsDublicate = data => {
    const userData = actualContacts.value.find(contact => {
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
    dispatch(addContact(data.name, data.number));
  };

  const normilezedFilter = filteredContacts.value.toLowerCase();
  const visibleContacts = actualContacts.value.filter(el => {
    return el.name.toLowerCase().includes(normilezedFilter);
  });

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />

      <h3>Contacts</h3>
      <Filter />
      <ContactList actualData={visibleContacts} />
    </Container>
  );
};
