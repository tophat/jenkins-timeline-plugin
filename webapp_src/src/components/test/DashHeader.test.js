import { mount, shallow } from 'enzyme'
import React from 'react'
import moment from 'moment'

import DashHeader from '../DashHeader'
import { buildStatuses, statusMap } from '../../constants'

describe('DashHeader', () => {
    const defaultProps = {
        buildUrl: 'http://localhost:8080/job/test/1/',
        startTime: moment(),
        endTime: moment(),
        duration: 1,
    }

    it('renders a start time label', () => {
        const header = shallow(<DashHeader {...defaultProps} />)
        expect(
            header.find({ clickId: 'timeline start time' }).exists(),
        ).toEqual(true)
    })

    it('renders a end time label', () => {
        const header = shallow(<DashHeader {...defaultProps} />)
        expect(header.find({ clickId: 'timeline end time' }).exists()).toEqual(
            true,
        )
    })

    it('renders a running time label', () => {
        const header = shallow(<DashHeader {...defaultProps} />)
        expect(
            header.find({ clickId: 'timeline running time' }).exists(),
        ).toEqual(true)
    })

    it('renders a build status label', () => {
        const header = shallow(<DashHeader {...defaultProps} />)
        expect(
            header.find({ clickId: 'timeline build status' }).exists(),
        ).toEqual(true)
    })

    it('displays the correct build status if one is supplied', () => {
        const header = shallow(
            <DashHeader
                buildStatus={buildStatuses.SUCCESS}
                {...defaultProps}
            />,
        )
        const expectedStatus = statusMap[buildStatuses.SUCCESS]
        expect(
            header.find({ clickId: 'timeline build status' }).text(),
        ).toEqual(`Status: ${expectedStatus}`)
    })

    it('displays the default build status if none is supplied', () => {
        const header = shallow(<DashHeader {...defaultProps} />)
        const expectedStatus = statusMap[buildStatuses.NOT_AVAILABLE]
        expect(
            header.find({ clickId: 'timeline build status' }).text(),
        ).toEqual(`Status: ${expectedStatus}`)
    })

    it('displays the longest running stage label', () => {
        const longestStage = {
            title: 'very long stage',
            duration: 55000,
        }
        const header = shallow(
            <DashHeader longestStage={longestStage} {...defaultProps} />,
        )
        const label = header.find({ clickId: 'timeline longest stage' })
        expect(label.exists()).toEqual(true)
        expect(label.text()).toEqual(
            `Longest stage: ${longestStage.title} (${
                longestStage.duration / 1000
            } seconds)`,
        )
    })
})
