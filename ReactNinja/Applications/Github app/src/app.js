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
      repoPage: 1,
      starredPage: 1
    }
    this.perPage = 3
  }

  toggleAbuttonHandler = (event) => {
    if (event.target.innerText.includes('repositorios')) {
      this.setState({
        bRepoActive: !this.state.bRepoActive
      })
    } else if (event.target.innerText.includes('Favoritos')) {
      this.setState({
        bStarredActive: !this.state.bStarredActive
      })
    }
  }

  getTypePage = (type, page) => {
    return (e) => {
      if (type === 'repos') {
        ajax()
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.userInfo.login}/repos?per_page=${this.perPage}&page=${this.state.repoPage}`
          )
          .then((userRepos) => {
            console.log(userRepos)
            this.setState({ repos: userRepos, repoPage: page })
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (type === 'starred') {
        console.log(this.state.starredPage)
        ajax()
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.userInfo.login}/starred?per_page=${this.perPage}&page=${this.state.starredPage}`
          )
          .then((userStarred) => {
            console.log(userStarred)
            this.setState({ starred: userStarred, starredPage: page })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }

  requestHandler = (event) => {
    const value = event.target.value
    const keyCode = event.which || event.keyCode
    const enterKey = 13

    if (keyCode === enterKey) {
      this.setState({
        isFetching: true
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
              following: userObject.following
            },
            repos: [],
            starred: [],
            bRepoActive: false,
            bStarredActive: false,
            isFetching: false
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
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/repos?per_page=${this.perPage}`
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
          `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${value}/starred?per_page=${this.perPage}`
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
        repos={this.state.repos}
        starred={this.state.starred}
        userInfo={this.state.userInfo}
        bRepoActive={this.state.bRepoActive}
        bStarredActive={this.state.bStarredActive}
        isFetching={this.state.isFetching}
        toggleAbuttonHandler={(event) => this.toggleAbuttonHandler(event)}
        requestHandler={(event) => this.requestHandler(event)}
        handlePagination={(type, page) => this.getTypePage(type, page)()}
      />
    )
  }
}
export default App
