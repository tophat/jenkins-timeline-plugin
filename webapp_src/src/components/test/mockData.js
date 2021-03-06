export const mockWfApiResponse = {
    data: {
        _links: { self: { href: '/job/test-pipeline/3/wfapi/describe' } },
        id: '3',
        name: '#3',
        status: 'SUCCESS',
        startTimeMillis: 1542726719576,
        endTimeMillis: 1542726755229,
        durationMillis: 35653,
        queueDurationMillis: 7,
        pauseDurationMillis: 0,
        stages: [
            {
                _links: {
                    self: {
                        href:
                            '/job/test-pipeline/3/execution/node/6/wfapi/describe',
                    },
                },
                id: '6',
                name: 'Preparation',
                execNode: '',
                status: 'SUCCESS',
                startTimeMillis: 1542726719790,
                durationMillis: 15131,
                pauseDurationMillis: 0,
            },
        ],
    },
}

export const mockNodeApiResponse = {
    data: {
        _links: {
            self: {
                href: '/job/test-pipeline/3/execution/node/6/wfapi/describe',
            },
        },
        id: '6',
        name: 'Preparation',
        execNode: '',
        status: 'SUCCESS',
        startTimeMillis: 1542726719790,
        durationMillis: 15131,
        pauseDurationMillis: 0,
        stageFlowNodes: [
            {
                _links: {
                    self: {
                        href:
                            '/job/test-pipeline/3/execution/node/7/wfapi/describe',
                    },
                    log: {
                        href: '/job/test-pipeline/3/execution/node/7/wfapi/log',
                    },
                },
                id: '7',
                name: 'Sleep',
                execNode: '',
                status: 'SUCCESS',
                parameterDescription: '5',
                startTimeMillis: 1542726719818,
                durationMillis: 5041,
                pauseDurationMillis: 0,
                parentNodes: ['6'],
            },
            {
                _links: {
                    self: {
                        href:
                            '/job/test-pipeline/3/execution/node/8/wfapi/describe',
                    },
                    log: {
                        href: '/job/test-pipeline/3/execution/node/8/wfapi/log',
                    },
                },
                id: '8',
                name: 'Print Message',
                execNode: '',
                status: 'SUCCESS',
                parameterDescription: 'some text',
                startTimeMillis: 1542726724859,
                durationMillis: 25,
                pauseDurationMillis: 0,
                parentNodes: ['7'],
            },
            {
                _links: {
                    self: {
                        href:
                            '/job/test-pipeline/3/execution/node/9/wfapi/describe',
                    },
                    log: {
                        href: '/job/test-pipeline/3/execution/node/9/wfapi/log',
                    },
                },
                id: '9',
                name: 'Sleep',
                execNode: '',
                status: 'SUCCESS',
                parameterDescription: '10',
                startTimeMillis: 1542726724884,
                durationMillis: 10022,
                pauseDurationMillis: 0,
                parentNodes: ['8'],
            },
        ],
    },
}

export const mockJobWfApiResponse = {
    data: {
        _links: {
            self: {
                href: '/job/test/wfapi/describe',
            },
            runs: {
                href: '/job/test/wfapi/runs',
            },
        },
        name: 'test',
        runCount: 3,
    },
}
