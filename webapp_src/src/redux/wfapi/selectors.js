import { sliceName } from './actions'

export const isBuildDataLoadingSelector = state =>
    state.getIn([sliceName, 'isLoading'])

export const hasBuildDataFailedToLoadSelector = state =>
    state.getIn([sliceName, 'hasErrored'])

export const buildStatusSelector = state =>
    state.getIn([sliceName, 'buildData', 'status'])

export const stageDataSelector = state =>
    state.getIn([sliceName, 'buildData', 'stages'])

export const buildStartTimeSelector = state =>
    state.getIn([sliceName, 'startTimeMillis'])

export const buildEndTimeSelector = state =>
    state.getIn([sliceName, 'endTimeMillis'])

export const buildNameSelector = state =>
    state.getIn([sliceName, 'buildData', 'name'])

export const buildDurationSelector = state =>
    state.getIn([sliceName, 'buildData', 'durationMillis'])
