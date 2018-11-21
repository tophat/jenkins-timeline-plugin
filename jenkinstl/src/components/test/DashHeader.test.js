import { shallow, mount } from 'enzyme'
import React from 'react'

import DashHeader from '../DashHeader'

describe('DashHeader', () => {
    it('renders the component', () => {
        const header = shallow(<DashHeader/>)
        expect(header).toMatchSnapshot()
    })
})