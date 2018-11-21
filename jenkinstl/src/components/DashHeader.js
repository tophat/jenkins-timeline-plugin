import React from 'react'

import { Row, Label, Container, TopBar, Title, LogoBox, BackButton } from './DashHeader.style'
import { statusMap } from '../constants'
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

    render() {
        const formattedTime = this.formatTime(this.props.duration)
        const formattedStatus = statusMap[this.props.buildStatus]
        const buildStatus = `Status: ${formattedStatus}`
        const startTime = `Started on ${this.props.startTime}`
        const runningTimePrefix = this.props.buildStatus === 'IN_PROGRESS' ? `Running` : `Ran`
        const runningTime = `${runningTimePrefix} for ${formattedTime}`

        const backLink = <BackButton href={this.props.buildUrl}>Back to Jenkins</BackButton>

        return (
            <Container
                status={this.props.buildStatus}
            >
                <TopBar>
                    <LogoBox>
                        <img
                            alt="Build timeline"
                            src={Logo}
                        />
                        <Title>Build timeline</Title>
                    </LogoBox>
                    <Label>{backLink}</Label>
                </TopBar>
                <Row>
                    <Label>{buildStatus}</Label>
                    <Label>{startTime}</Label>
                    <Label>{runningTime}</Label>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        )
    }
}