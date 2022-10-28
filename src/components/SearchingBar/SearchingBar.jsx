import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AiOutlineSearch,
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchingBar.styled';

export const SearchBar = (props) => {
  const [searchString, setSearchString] = useState('');
  

  const handleOnChange = event => {
    setSearchString( event.currentTarget.value.toLowerCase() );
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchString.trim() === '') {
      Notify.info('Please, write name for the image');
      return;
    }
    props.onSubmit(searchString);
  };
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            value={searchString}
            onChange={handleOnChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
