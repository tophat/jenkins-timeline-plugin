import React from 'react'

import { Row, Label, Container, TopBar, Title, LogoBox, BackButton } from './DashHeader.style'
import { statusMap, buildStatuses } from '../constants'
import Logo from '../assets/logo.png'

export default class DashHeader extends React.PureComponent {
    formatTime = timestamp => {
        const seconds = parseInt(timestamp / 1000) % 60
        const minutes = parseInt(timestamp / (1000 * 60)) % 60

        const parts = []

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

    getTopBar = () => (
        <TopBar>
            <LogoBox>
                <img
                    alt="Build timeline"
                    src={Logo}
                />
                <Title>Build timeline > {this.props.buildName}</Title>
            </LogoBox>
            <BackButton onClick={this.onBackButtonClick} href={this.props.buildUrl}>Back to Jenkins</BackButton>
        </TopBar>
    )

    getDetailsBar = () => {
        const buildStatus = `Status: ${statusMap[this.props.buildStatus]}`
        const formattedStartTime = this.props.startTime.format("MMMM Do YYYY, hh:mm:ss a")
        const formattedEndTime = this.props.endTime ? this.props.endTime.format("MMMM Do YYYY, hh:mm:ss a") : null
        const startTime = `Started on ${formattedStartTime}`
        const runningTimePrefix = this.props.buildStatus === buildStatuses.IN_PROGRESS ? `Running` : `Ran`
        const runningTime = `${runningTimePrefix} for ${this.formatTime(this.props.duration)}`
        const longestStage =
            `Longest stage: ${this.props.longestStage.title} (${this.formatTime(this.props.longestStage.duration)})`
        const endedOn = this.props.endTime ? `Ended on ${formattedEndTime}` : null

        return (
            <React.Fragment>
                <Row>
                    <Label>{buildStatus}</Label>
                    <Label>{startTime}</Label>
                    <Label>{runningTime}</Label>
                </Row>
                <Row>
                    <Label>{longestStage}</Label>
                    <Label>{endedOn}</Label>
                    <Label></Label>
                </Row>
            </React.Fragment>
        )
    }

    render() {


        return (
            <Container
                status={this.props.buildStatus}
            >
                {this.getTopBar()}
                {this.getDetailsBar()}
            </Container>
        )
    }
}