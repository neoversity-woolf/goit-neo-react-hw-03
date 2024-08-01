import { PiUserCircleDuotone, PiPhoneDuotone } from 'react-icons/pi';
import css from './Contact.module.css';

const Contact = ({ id, name, phone, onDeleteClick }) => {
  return (
    <div className={css.contact} id={id}>
      <div className={css.avatar}>{name[0]}</div>
      <div className={css.details}>
        <p className={css.field}>
          <PiUserCircleDuotone size={28} /> {name}
        </p>
        <p className={css.field}>
          <PiPhoneDuotone size={28} /> {phone}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDeleteClick(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
