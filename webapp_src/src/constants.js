export const Colours = {
    SUCCESS: '#78b037',
    PROGRESS: '#4a90e2',
    FAILURE: '#d54c53',
    TEXT: '#fff',
}

export const statusMap = {
    SUCCESS: 'Build completed successfully',
    IN_PROGRESS: 'Build is in progress',
    FAILED: 'Build failed',
    NOT_AVAILABLE: 'N/A'
}

export const buildStatuses = {
    IN_PROGRESS: 'IN_PROGRESS',
    FAILED: 'FAILED',
    SUCCESS: 'SUCCESS',
    NOT_AVAILABLE: 'NOT_AVAILABLE',
}

export const validStatuses = Object.values(buildStatuses)