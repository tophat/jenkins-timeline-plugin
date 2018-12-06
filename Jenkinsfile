#!groovy

node {
    stage("Install dependencies") {
        sh 'apt-get install nodejs -y'
    }

    stage("Build plugin") {
        buildPlugin(
            platforms: ['linux'],
            tests: [skip: true]
        )
    }
}

