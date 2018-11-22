import { shallow } from 'enzyme'
import React from 'react'

import App from '../App'
import Dashboard from '../components/Dashboard'

describe('Application root', () => {
    it('Renders a Dashboard', () => {
        const mockUrl = 'mock'
        const app = shallow(<App buildUrl={mockUrl} />)
        expect(app.find(Dashboard).exists()).toEqual(true)
    })
})
