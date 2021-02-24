import styled from 'styled-components'

import { Colours } from '../constants'

const getStatusColour = status => {
    if (status === 'SUCCESS') return Colours.SUCCESS
    else if (status === 'IN_PROGRESS') return Colours.PROGRESS
    else if (status === 'FAILED') return Colours.FAILURE
    return Colours.ABORTED
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

export const Label = styled.span`
    display: flex;
    flex: 1 0;

    justify-content: center;

    &:first-child {
        justify-content: flex-start;
        max-width: 20%;
    }

    &:last-child {
        justify-content: flex-end;
        max-width: 20%;
    }
`

export const TopBar = styled.div`
    background-color:rgba(0, 0, 0, 0.2);
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

export const BuildNavigationBar = styled.div`
    background-color:rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-start;
    padding: 10px;
`