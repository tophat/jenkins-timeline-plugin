import React from 'react'
import Dashboard from './components/Dashboard'
export default class App extends React.Component {
  render() {
    return (
      <Dashboard
        buildUrl={this.props.buildUrl}
      />
    )
  }
}


