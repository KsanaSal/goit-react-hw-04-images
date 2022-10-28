// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonMore } from './Button.styled';

export const Button = (props) => {
  const handleButton = () => {
    props.changePage();
  };
    return (
      <ButtonMore type="button" onClick={handleButton}>
        Load more
      </ButtonMore>
    );
  }


Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
