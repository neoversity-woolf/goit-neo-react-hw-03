import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearchChange }) => {
  const searchId = useId();

  return (
    <fieldset className={css.search}>
      <legend className="visually-hidden">Search form</legend>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="search"
        name="seacrhContact"
        id={searchId}
        value={value}
        onChange={event => {
          onSearchChange(event.target.value.toLowerCase().trim());
        }}
      />
    </fieldset>
  );
};
export default SearchBox;
