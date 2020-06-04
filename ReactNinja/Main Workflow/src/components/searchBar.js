import React from 'react';

const SearchBar = ({ requestHandler, isDisable }) => (
  <div className="search">
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
