import React from 'react';

const ActionButtons = (props) => (
  <div className="actions">
    <button onClick={props.toggleAbuttonHandler}>Ver repositorios</button>
    <button onClick={props.toggleAbuttonHandler}>Ver Favoritos</button>
  </div>
);

ActionButtons.propType = {
  toggleAbuttonHandler: React.PropTypes.func.isRequired,
};

export default ActionButtons;
