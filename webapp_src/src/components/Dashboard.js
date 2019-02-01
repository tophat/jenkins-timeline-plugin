import React from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'
import PropTypes from 'prop-types'
import moment from 'moment'

import { connect } from 'react-redux'

import { fetchWfApiData } from '../redux/wfapi/actions'
import {
    isBuildDataLoadingSelector,
    buildStatusSelector,
    buildNameSelector,
    buildEndTimeSelector,
    buildStartTimeSelector,
    buildDurationSelector,
    stageDataSelector,
} from '../redux/wfapi/selectors'

import DashHeader from './DashHeader'
import { DashContainer } from './Dashboard.style'

export class UnconnectedDashboard extends React.Component {
    static propTypes = {
        buildUrl: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        // this.state = {
        //     stages: [],
        //     status: 'N/A',
        // }
    }

    buildApiURL = url => {
        return `${url}wfapi/describe`
    }

    componentDidMount() {
        const buildEndpoint = this.buildApiURL(this.props.buildUrl)
        this.props.fetchWfApiData(buildEndpoint)
        // axios.get(buildEndpoint).then(result => {
        //     const stages = result.data.stages
        //     const promises = stages.map(stage => {
        //         const stageLink = stage._links.self.href
        //         return this.getStageInfo(stageLink)
        //     })
        //     Promise.all(promises).then(stages => {
        //         const longestStage = this.findLongestStage(stages)
        //         this.setState({
        //             title: result.data.name,
        //             longestStage,
        //             stages,
        //             start: moment(result.data.startTimeMillis),
        //             duration: result.data.durationMillis,
        //             end: moment(
        //                 result.data.startTimeMillis +
        //                     result.data.durationMillis,
        //             ),
        //             status: result.data.status,
        //         })
        //     })
        // })
    }

    // getStageInfo = stageEndpoint => {
    //     stageEndpoint = `http://localhost:8080${stageEndpoint}`
    //     return axios.get(stageEndpoint).then(result => {
    //         const stageData = result.data
    //         const stage = {
    //             title: stageData.name,
    //             start: moment(stageData.startTimeMillis),
    //             duration: stageData.durationMillis,
    //             steps: result.data.stageFlowNodes.map(node => ({
    //                 start: moment(node.startTimeMillis),
    //                 end: moment(node.startTimeMillis + node.durationMillis),
    //                 title: node.name,
    //                 status: node.status,
    //                 stage: stageData.name,
    //             })),
    //         }
    //         return stage
    //     })
    // }

    findLongestStage = () => {
        if (!this.props.stages) return null
        const stages = this.props.stages
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
        return []
        if(!this.props.stages) return []

        this.props.stages.forEach(stage => {
            stage.steps.forEach(step => {
                data.push([stage.title, step.title, step.start, step.end])
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
        if (this.props.isLoading) return null

        const endTime =
            this.props.status !== 'IN_PROGRESS' ? this.props.buildEndTime : null

        const headerHeight = `150px`

        return (
            <React.Fragment>
                <DashHeader
                    buildStatus={this.props.buildStatus}
                    startTime={this.props.buildStartTime}
                    duration={this.props.buildDuration}
                    buildUrl={this.props.buildUrl}
                    buildName={this.props.buildName}
                    longestStage={this.findLongestStage()}
                    endTime={this.props.buildEndTime}
                />
                <DashContainer>
                    <Chart
                        width={`100%`}
                        height={`calc(100vh - ${headerHeight})`}
                        chartType="Timeline"
                        loader={<div>Loading...</div>}
                        data={this.formatChartRows()}
                    />
                </DashContainer>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    fetchWfApiData,
}

const mapStateToProps = state => ({
    buildStatus: buildStatusSelector(state),
    isLoading: isBuildDataLoadingSelector(state),
    buildName: buildNameSelector(state),
    buildStartTime: moment(buildStartTimeSelector(state)),
    buildEndTime: moment(buildEndTimeSelector(state)),
    buildDuration: moment(buildDurationSelector(state)),
    stages: stageDataSelector(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedDashboard)
