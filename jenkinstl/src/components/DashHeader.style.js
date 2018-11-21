import styled from 'styled-components'

import { Colours } from '../constants'

const getStatusColour = status => {
    if (status === 'SUCCESS') return Colours.SUCCESS
    else if (status === 'IN_PROGRESS') return Colours.PROGRESS
}

export const Container = styled.header`
    background-color: ${props => getStatusColour(props.status)};
    color: ${Colours.TEXT};

    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

export const Rows = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.span`
`

export const Subcontainer = styled.aside`
    box-shadow: inset 1000px 0 0 0 rgba(255, 255, 255, 0.5);
`

export const TopBar = styled.div`
    box-shadow: inset 9999px 0 0 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.span`
    margin-left: 10px;
    width: 100%;
`

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
`

export const BackButton = styled.button`
    padding: 10px;
    border: 3px solid rgba(0,0,0,0.3);
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s;
    color: ${Colours.TEXT};

    &:hover {
        background-color: rgba(0,0,0,0.3);
        border-color: transparent;
    }
`