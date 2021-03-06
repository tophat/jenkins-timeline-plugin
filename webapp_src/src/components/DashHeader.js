import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
    Row,
    Label,
    Container,
    TopBar,
    Title,
    LogoBox,
    BackButton,
} from './DashHeader.style'
import { statusMap, buildStatuses } from '../constants'
import Logo from '../assets/logo.png'

export default class DashHeader extends React.PureComponent {
    static propTypes = {
        buildId: PropTypes.string.isRequired,
        buildStatus: PropTypes.string,
        buildUrl: PropTypes.string.isRequired,
        buildName: PropTypes.string.isRequired,
        duration: PropTypes.number,
        endTime: PropTypes.instanceOf(moment),
        longestStage: PropTypes.shape({
            title: PropTypes.string,
            duration: PropTypes.number,
        }).isRequired,
        startTime: PropTypes.instanceOf(moment),
        onClickBuildNavButton: PropTypes.func.isRequired,
        runCount: PropTypes.number.isRequired,
    }

    static defaultProps = {
        buildStatus: buildStatuses.NOT_AVAILABLE,
        duration: 0,
        endTime: null,
        startTime: null,
    }

    formatTime = timestamp => {
        const seconds = parseInt(timestamp / 1000) % 60
        const minutes = parseInt(timestamp / (1000 * 60)) % 60
        const hours = parseInt(timestamp / (1000 * 3600))

        const parts = []

        if (hours >= 1) {
            const plural = hours > 1 ? 's' : ''
            parts.push(`${hours} hour${plural}`)
        }

        if (minutes >= 1) {
            const plural = minutes > 1 ? `s` : ``
            parts.push(`${minutes} minute${plural}`)
        }

        if (seconds >= 1) {
            const plural = seconds > 1 ? `s` : ``
            parts.push(`${seconds} second${plural}`)
        }

        return parts.join(', ')
    }

    onBackButtonClick = () => {
        window.location.assign(this.props.buildUrl)
    }

    getTopBar = () => {
        const currBuildId = parseInt(this.props.buildId)
        const prevBuildId = currBuildId - 1
        const nextBuildId = currBuildId + 1
        return (
            <TopBar>
                <LogoBox>
                    <img alt="Build timeline" src={Logo} />
                    <Title>{`Build timeline > ${this.props.buildName}`}</Title>
                </LogoBox>
                <div>
                    {this.getBuildNavButton(prevBuildId, 'Previous Build')}
                    {this.getBuildNavButton(nextBuildId, 'Next Build')}
                    <BackButton
                        onClick={this.onBackButtonClick}
                        href={this.props.buildUrl}
                    >
                        Back to Jenkins
                    </BackButton>
                </div>
            </TopBar>
        )
    }

    getLongestStageLabel = () => {
        if (!this.props.longestStage) return null
        const longestStage = `Longest stage: ${
            this.props.longestStage.title
        } (${this.formatTime(this.props.longestStage.duration)})`

        return <Label clickId="timeline longest stage">{longestStage}</Label>
    }

    getStartTimeLabel = () => {
        if (!this.props.startTime) return null
        const formattedStartTime = this.props.startTime.format(
            'MMMM Do YYYY, hh:mm:ss a',
        )
        const startTime = `Started on ${formattedStartTime}`
        return <Label clickId="timeline start time">{startTime}</Label>
    }

    getEndTimeLabel = () => {
        if (!this.props.endTime) return null
        const formattedEndTime = this.props.endTime
            ? this.props.endTime.format('MMMM Do YYYY, hh:mm:ss a')
            : null
        const endedOn = this.props.endTime
            ? `Ended on ${formattedEndTime}`
            : null
        return <Label clickId="timeline end time">{endedOn}</Label>
    }

    getRunningTimeLabel = () => {
        if (!this.props.duration) return null
        const runningTimePrefix =
            this.props.buildStatus === buildStatuses.IN_PROGRESS
                ? `Running`
                : `Ran`
        const runningTime = `${runningTimePrefix} for ${this.formatTime(
            this.props.duration,
        )}`
        return <Label clickId="timeline running time">{runningTime}</Label>
    }

    getBuildStatusLabel = () => {
        const buildStatus = `Status: ${statusMap[this.props.buildStatus]}`
        return <Label clickId="timeline build status">{buildStatus}</Label>
    }

    getDetailsBar = () => {
        return (
            <React.Fragment>
                <Row>
                    {this.getBuildStatusLabel()}
                    {this.getStartTimeLabel()}
                    {this.getRunningTimeLabel()}
                </Row>
                <Row>
                    {this.getLongestStageLabel()}
                    {this.getEndTimeLabel()}
                    <Label />
                </Row>
            </React.Fragment>
        )
    }

    getBuildNavButton = (buildId, displayText) => {
        if (buildId < 1 || buildId > this.props.runCount) return null

        return (
            <BackButton onClick={this.props.onClickBuildNavButton(buildId)}>
                {displayText}
            </BackButton>
        )
    }

    render() {
        return (
            <Container status={this.props.buildStatus}>
                {this.getTopBar()}
                {this.getDetailsBar()}
            </Container>
        )
    }
}
