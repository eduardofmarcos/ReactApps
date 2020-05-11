import React from "react";

const Repos = props => (
  <div className={props.classname}>
    <h2>{props.title}</h2>
    <ul>
      {props.arrayToMap.map((element, index) => (
        <li key={index}>
          <a href={element.link}>{element.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: ""
};

Repos.propTypes = {
  classname: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  arrayToMap: React.PropTypes.array
};

export default Repos;
