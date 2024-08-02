import { Contact } from '@components';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <div>
      <h2>Contact list</h2>
      <ul className={css.list}>
        {!!contacts.length &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact
                id={id}
                name={name}
                phone={number}
                onDeleteClick={onDeleteClick}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
