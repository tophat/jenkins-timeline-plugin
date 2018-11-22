
import axios from 'axios'
import Chart from 'react-google-charts'
import { shallow, mount } from 'enzyme'
import React from 'react'

import Dashboard from '../Dashboard'
import { mockWfApiResponse, mockNodeApiResponse } from './mockData'

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

describe('Dashboard', () => {
    const mockBuildUrl = 'mock'
    const mockState = {
        stages: [
            {
                title: 'cool stage name',
                steps: []
            }
        ]
    }

    beforeEach(() => {
        jest.restoreAllMocks()
    })

    it('does not render a Chart if the state does not contain stages', () => {
        const dashboard = shallow(<Dashboard buildUrl={mockBuildUrl} />)
        expect(dashboard.find(Chart).exists()).toEqual(false)
    })

    it('renders a Chart if the state contains stages', () => {
        const dashboard = shallow(<Dashboard buildUrl={mockBuildUrl} />)
        dashboard.setState(mockState)
        expect(dashboard.find(Chart).exists()).toEqual(true)
    })

    describe('Formatting endpoint data', () => {
        it('calls the workflow api on mount', () => {
            const spy = jest.spyOn(axios, 'get')
            mount(<Dashboard buildUrl={mockBuildUrl} />)
            const expectedUrl = mockBuildUrl + 'wfapi/describe'
            expect(spy).toHaveBeenCalledWith(expectedUrl)
        })

        it('calls the workflow api for each stage inside the original on mount response', () => {
            const spy = jest.spyOn(axios, 'get')
                .mockImplementationOnce(() => Promise.resolve(mockWfApiResponse))
                .mockImplementationOnce(() => Promise.resolve(mockNodeApiResponse))
            mount(<Dashboard buildUrl={mockBuildUrl} />)
            return flushPromises().then(() => {
                expect(spy).toHaveBeenCalledTimes(2)
            })
        })

        it('sets the state correctly from the api data', () => {
            jest.spyOn(axios, 'get')
                .mockImplementationOnce(() => Promise.resolve(mockWfApiResponse))
                .mockImplementationOnce(() => Promise.resolve(mockNodeApiResponse))
                .mockImplementation(() => Promise.resolve())
            const dashboard = mount(
                <Dashboard buildUrl={mockBuildUrl} />,
            )
            return flushPromises().then(() => {
                const dashState = dashboard.state()
                const stages = dashState.stages
                const stage = stages[0]
                const expectedStage = {
                    title: mockNodeApiResponse.data.name,
                    start: mockNodeApiResponse.data.startTimeMillis,
                    steps: mockNodeApiResponse.data.stageFlowNodes.map(step => ({
                        title: step.name,
                        start: new Date(step.startTimeMillis),
                        end: new Date(step.startTimeMillis + step.durationMillis),
                        status: step.status,
                        stage: mockNodeApiResponse.data.name,
                    }))
                }
                expect(stages.length).toEqual(mockWfApiResponse.data.stages.length)
                expect(stage.steps.length).toEqual(mockNodeApiResponse.data.stageFlowNodes.length)
                expect(stage).toEqual(expectedStage)

            })
        })
    })

})
