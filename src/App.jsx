import { useState, useEffect } from 'react';
import { ContactForm, SearchBox, ContactList } from '@components';

const localStorageKey = 'phonebook';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey) ?? [];
    return savedContacts.length ? JSON.parse(savedContacts) : savedContacts;
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const serializedState = JSON.stringify(contacts);
    localStorage.setItem(localStorageKey, serializedState);
  }, [contacts]);

  const onAddContact = contact => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };
  const onDeleteClick = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={searchValue} onSearchChange={setSearchValue} />
      <ContactList contacts={visibleContacts} onDeleteClick={onDeleteClick} />
    </div>
  );
};
export default App;
