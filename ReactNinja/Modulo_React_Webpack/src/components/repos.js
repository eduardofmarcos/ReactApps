import React from 'react';

const Repos = (props) => {
  const repo = (
    <div className={props.classname}>
      <h2>{props.title}</h2>
      <ul>
        {props.repos.map((element, index) => {
          let newLink = element.git_url.replace('git', 'https');

          return (
            <li key={index}>
              <a href={newLink}>{element.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return repo;
};
Repos.defaultProps = {
  className: '',
};

Repos.propTypes = {
  classname: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  arrayToMap: React.PropTypes.array,
};

export default Repos;
