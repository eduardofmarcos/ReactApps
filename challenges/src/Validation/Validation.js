import React from "react";

const Validation = props => {
  const size = props.size;

  let message;
  if (size < 5) {
    message = "Too Short";
  } else {
    message = "Validated!";
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Validation;
