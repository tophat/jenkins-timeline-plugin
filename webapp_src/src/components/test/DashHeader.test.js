import { shallow } from 'enzyme'
import React from 'react'
import moment from 'moment'

import DashHeader from '../DashHeader'
import { statusMap, buildStatuses } from '../../constants'

describe('DashHeader', () => {
    const defaultProps = {
        startTime: moment('2021-02-24T23:50:56.796Z'),
        endTime: moment('2021-02-24T23:50:56.797Z'),
        duration: 1,
        buildId: '3',
        buildUrl: 'http://localhost:8080/job/test-pipeline/3/',
        buildName: '#3',
        longestStage: {
            title: 'Preparation',
            duration: 15131,
        },
        onClickBuildNavButton: () => {},
        runCount: 6,
    }
    it('renders the component', () => {
        const requiredProps = {
            buildId: '3',
            buildUrl: 'http://localhost:8080/job/test-pipeline/3/',
            buildName: '#3',
            longestStage: {
                title: 'Preparation',
                duration: 15131,
            },
            onClickBuildNavButton: () => {},
            runCount: 6,
        }

        const header = shallow(<DashHeader {...requiredProps} />)
        expect(header).toMatchSnapshot()
    })

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
            <DashHeader {...defaultProps} longestStage={longestStage} />,
        )
        const label = header.find({ clickId: 'timeline longest stage' })
        expect(label.exists()).toEqual(true)
        expect(label.text()).toEqual(
            `Longest stage: ${longestStage.title} (${longestStage.duration /
                1000} seconds)`,
        )
    })
})
