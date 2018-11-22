import React from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'
import moment from 'moment'

import DashHeader from './DashHeader'
import {DashContainer} from './Dashboard.style'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stages: [],
            status: 'N/A'
        }
    }

    buildApiURL = url => {
        return `${url}wfapi/describe`
    }

    componentDidMount() {
        const buildEndpoint = this.buildApiURL(this.props.buildUrl)
        axios
            .get(buildEndpoint)
            .then(result => {
                const stages = result.data.stages
                const promises = stages.map(stage => {
                    const stageLink = stage._links.self.href
                    return this.getStageInfo(stageLink)
                })
                Promise.all(promises).then(stages => {
                    const longestStage = this.findLongestStage(stages)
                    this.setState(
                        {
                            title: result.data.name,
                            longestStage,
                            stages,
                            start: moment(result.data.startTimeMillis),
                            duration: result.data.durationMillis,
                            end: moment(result.data.startTimeMillis + result.data.durationMillis),
                            status: result.data.status,
                        }
                    )
                })
            })
    }

    getStageInfo = stageEndpoint => {
        // stageEndpoint = 'http://localhost:8080' + stageEndpoint
        return axios.get(stageEndpoint)
            .then(result => {
                const stageData = result.data
                const stage = {
                    title: stageData.name,
                    start: moment(stageData.startTimeMillis),
                    duration: moment(stageData.durationMillis),
                    steps: result.data.stageFlowNodes.map(node => {
                        return {
                            start: moment(node.startTimeMillis),
                            end: moment(node.startTimeMillis + node.durationMillis),
                            title: node.name,
                            status: node.status,
                            stage: stageData.name,
                        }
                    })
                }
                
                return stage
            })
    }

    findLongestStage = stages => {
        return stages.reduce((currentMaximum, stage) => {
            if (currentMaximum === null)
                return {
                    title: stage.title,
                    duration: stage.duration,
                }
            
            const currentMaxDuration = currentMaximum.duration
            const currentStageDuration = stage.duration

            if (currentStageDuration > currentMaxDuration)
                return {
                    title: stage.title,
                    duration: stage.duration,
                }
            else {
                return currentMaximum
            }
        }, null)
    }

    formatChartRows = () => {
        const data = []

        this.state.stages.forEach(stage => {
            stage.steps.forEach(step => {
                data.push([
                    stage.title,
                    step.title,
                    step.start,
                    step.end,
                ])
            })
        })

        const columns = [
            { type: 'string', id: 'Stage' },
            { type: 'string', id: 'Step' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
        ]

        return [columns, ...data]
    }

    render() {
        if (this.state.stages.length === 0) return null

        const startDate = new Date(this.state.start).toString()
        const endTime = this.state.status !== 'IN_PROGRESS' ? new Date(this.state.end) : null

        return (
            <React.Fragment>
                <DashHeader
                    buildStatus={this.state.status}
                    startTime={startDate}
                    duration={this.state.duration}
                    buildUrl={this.props.buildUrl}
                    buildName={this.state.title}
                    longestStage={this.state.longestStage}
                    end={endTime}
                />
                <DashContainer>
                    <Chart
                        width={`100%`}
                        chartType="Timeline"
                        loader={<div>Loading...</div>}
                        data={this.formatChartRows()}
                    />
                </DashContainer>
            </React.Fragment>

        )
    }
}