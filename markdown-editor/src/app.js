'use strict'

import React, { Component } from 'react'
import 'normalize.css'
import MarkdownEditor from './markdown-editor'

import './css/style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => {
      return { __html: this.state.value }
    }
  }

  render() {
    return (
      <MarkdownEditor
        getMarkup={this.getMarkup}
        value={this.state.value}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App
