//"use strict"

import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  requestHandler = (event) => {
    const value = event.target.value;
    const keyCode = event.which || event.keyCode;
    const enterKey = 13;
    if (keyCode === enterKey) {
      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}`
        )
        .then((userObject) => {
          console.log(userObject);
          this.setState({
            userInfo: {
              photo: userObject.avatar_url,
              username: userObject.name,
              login: userObject.login,
              repositories: userObject.public_repos,
              followers: userObject.followers,
              following: userObject.following,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/repos`
        )
        .then((userRepos) => {
          console.log(userRepos);
          this.setState({ repos: userRepos });
        })
        .catch((err) => {
          console.log(err);
        });
      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/starred`
        )
        .then((userStarred) => {
          console.log(userStarred);
          this.setState({ starred: userStarred });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <AppContent
        requestHandler={(event) => this.requestHandler(event)}
        userinfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}
export default App;
