//"use strict"

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      bRepoActive: false,
      bStarredActive: false,
      isFetching: false,
    }
  }

  toggleAbuttonHandler = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText.includes('repositorios')) {
      this.setState({
        bRepoActive: !this.state.bRepoActive,
      })
    } else if (event.target.innerText.includes('Favoritos')) {
      this.setState({
        bStarredActive: !this.state.bStarredActive,
      })
    }
  }

  requestHandler = (event) => {
    const value = event.target.value
    const keyCode = event.which || event.keyCode
    const enterKey = 13

    if (keyCode === enterKey) {
      this.setState({
        isFetching: true,
      })
      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}`
        )
        .then((userObject) => {
          this.setState({
            userInfo: {
              photo: userObject.avatar_url,
              username: userObject.name,
              login: userObject.login,
              repositories: userObject.public_repos,
              followers: userObject.followers,
              following: userObject.following,
            },
            repos: [],
            starred: [],
            bRepoActive: false,
            bStarredActive: false,
            isFetching: false,
          })
        })
        .catch((err) => {
          console.log(err)
        })
        .always(() => {
          this.setState({ isFetching: false })
        })

      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/repos`
        )
        .then((userRepos) => {
          console.log(userRepos)
          this.setState({ repos: userRepos })
        })
        .catch((err) => {
          console.log(err)
        })
      ajax()
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/starred`
        )
        .then((userStarred) => {
          console.log(userStarred)
          this.setState({ starred: userStarred })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  render() {
    return (
      <AppContent
        {...this.state}
        toggleAbuttonHandler={(event) => this.toggleAbuttonHandler(event)}
        requestHandler={(event) => this.requestHandler(event)}
      />
    )
  }
}
export default App