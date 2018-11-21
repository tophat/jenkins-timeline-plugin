import React from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stages: []
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
                const promises = []
                stages.forEach(stage => {
                    const stageLink = stage._links.self.href
                    promises.push(this.getStageInfo(stageLink))
                })
                Promise.all(promises).then(r => {
                    this.setState(
                        {
                            stages: r,
                            start: result.data.startTimeMillis,
                            duration: result.data.durationMillis,
                            end: result.data.startTimeMillis + result.data.durationMillis
                        }
                    )
                })
            })
    }

    getStageInfo = stageEndpoint => {
        return axios.get(stageEndpoint)
            .then(result => {
                const stageData = result.data
                const stage = {
                title: stageData.name,
                start: stageData.startTimeMillis,
                steps: result.data.stageFlowNodes.map(node => {
                    return {
                        start: new Date(node.startTimeMillis),
                        end: new Date(node.startTimeMillis + node.durationMillis),
                        title: node.name,
                        status: node.status,
                        stage: stageData.name,
                    }
                })
                }
                
                return stage
            })
    }

    formatChartRows = () => {
        const data = [
        [
            { type: 'string', id: 'Stage' },
            { type: 'string', id: 'Step' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
        ],
        ]

        this.state.stages.forEach(stage => {
            stage.steps.forEach(step => {
                data.push([
                    stage.title,
                    step.title,
                    step.start,
                    step.end
                ])
            })
        })
        return data
    }

    render() {
        if (this.state.stages.length == 0) return null

        return (
            <Chart
                width={`100%`}
                chartType="Timeline"
                loader={<div>Loading...</div>}
                data={this.formatChartRows()}
            />
        )
    }
}