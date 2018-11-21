import React from 'react'
import App from '../App'
import Dashboard from '../components/Dashboard'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('Application root', () => {
    it('Renders a Dashboard', () => {
        jest.spyOn(App.prototype, 'getBuildUrl').mockImplementation(() => {})
        const app = shallow(<App/>)
        expect(app.find(Dashboard).exists()).toEqual(true)
    })
})