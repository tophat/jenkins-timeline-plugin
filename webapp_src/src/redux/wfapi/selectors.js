import { sliceName } from './actions'

export const isBuildDataLoadingSelector = state =>
    state.getIn([sliceName, 'isLoading'])

export const hasBuildDataFailedToLoadSelector = state =>
    state.getIn([sliceName, 'hasErrored'])

export const buildStatusSelector = state =>
    state.getIn([sliceName, 'buildData', 'status'])
