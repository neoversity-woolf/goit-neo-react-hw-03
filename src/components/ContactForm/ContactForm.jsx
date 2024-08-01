import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const onFormSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;
    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    onAddContact(contact);

    form.reset();
  };

  return (
    <Formik>
      <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.field}>
          <span className={css.tag}>Name</span>
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.field}>
          <span className={css.tag}>Number</span>
          <input className={css.input} type="text" name="number" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
};

export default ContactForm;
