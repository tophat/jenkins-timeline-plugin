import React from 'react'
import Dashboard from './components/Dashboard'
export default class App extends React.Component {
  getBuildUrl() {
    return window.location.href.split('?')[1].split('=')[1]
  }

  render() {
    return (
      <Dashboard
        buildUrl={this.getBuildUrl()}
      />
    )
  }
}


