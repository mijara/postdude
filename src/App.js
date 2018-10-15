import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import Request from './containers/Request/Request'

const currentRequest = {
  url: 'http://example.com',
  method: 'GET',
}

class App extends Component {
  state = {
    currentRequest
  }

  render() {
    return (
      <Layout>
        <Request
          request={ this.state.currentRequest }
          onChange={ it => this.setState({ currentRequest: it }) }
        />
      </Layout>
    )
  }
}

export default App
