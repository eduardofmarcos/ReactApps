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

// SearchBar.propType = {
//   requestHandler: React.propType.func.isRequired
// };

export default SearchBar;
