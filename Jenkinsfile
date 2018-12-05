#!groovy

<<<<<<< HEAD
buildPlugin(
    platforms: ['linux'],
    tests: [skip: true]
)
=======
node() {
    stage('Setup') {
        deleteDir()
        checkout scm
    }

    docker.image('maven:3.6.0-jdk-8-alpine').inside {
        try {
            stage('Building Everything') {
                sh 'apk add make npm'
                sh 'make build_all'
            }

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
>>>>>>> feat: add jenkinsfile for publishing (#48)
