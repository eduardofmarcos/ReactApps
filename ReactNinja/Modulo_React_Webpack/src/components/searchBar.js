import React from "react";

const SearchBar = ({ requestHandler }) => (
  <div className="search">
    <input
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
