import React from "react";
import classes from "./../Cockpit/Cockpit.css";

const Cockpit = props => {
  let classRed = null;
  if (props.stateLength < 3) {
    classRed = classes.red;
  }

  let btnRed;
  if (props.stateStatus) {
    btnRed = classes.Red;
  }

  
  return (
    <div className={classes.Cockpit}>
      <header className="App-header">SurfDiary</header>
      <p className={classRed}>It's working!</p>

      <button className={btnRed} onClick={props.toggle}>
        Show Surfers!
      </button>
    </div>
  );
};

export default Cockpit;
