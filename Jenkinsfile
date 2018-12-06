#!groovy

node() {
    stage('Setup') {
        deleteDir()
        checkout scm
    }

    docker.image('maven:3.6.0-jdk-8-alpine').inside {
        try {
            buildPlugin(
                platforms: ['linux'],
                tests: [skip: true]
            )
        } catch(err) {
            currentBuild.result = "FAILURE"

            if (err.toString().contains('exit code 143')) {
                currentBuild.result = "ABORTED"
            }
        } finally {
            stage('Cleanup') {
                deleteDir()
            }
        }
    }
}
