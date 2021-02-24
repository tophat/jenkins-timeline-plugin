import React from 'react'
import PropTypes from 'prop-types'

import Dashboard from './components/Dashboard'

export default class App extends React.PureComponent {
    static propTypes = {
        buildUrl: PropTypes.string.isRequired,
    }

    render() {
        return <Dashboard buildUrl={this.props.buildUrl} />
    }
}
