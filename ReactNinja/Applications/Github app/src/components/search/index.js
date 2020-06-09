import React from 'react';
import style from './../search/search.css';

const SearchBar = ({ requestHandler, isDisable }) => (
  <div className={style.search}>
    <input
      disabled={isDisable}
      type="search"
      placeholder="Digite o nome do usuario"
      onKeyUp={requestHandler}
    />
  </div>
);

SearchBar.propType = {
  requestHandler: React.PropTypes.func.isRequired,
  isDisable: React.PropTypes.bool.isRequired,
};

export default SearchBar;
