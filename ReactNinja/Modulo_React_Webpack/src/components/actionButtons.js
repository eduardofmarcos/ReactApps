import React from "react";

const ActionButtons = props => (
  <div className="actions">
    <button onClick={props.toggleAbuttonHandler}>Ver repositorios</button>
    <button onClick={props.toggleAbuttonHandler}>Ver Favoritos</button>
  </div>
);

export default ActionButtons;
