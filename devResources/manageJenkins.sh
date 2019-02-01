#!/bin/bash

JENKINS_CONTAINER=local_jenkins
DOES_CONTAINER_ALREADY_EXIST=`docker ps -aq -f name=$JENKINS_CONTAINER`
IS_CONTAINER_RUNNING=`docker ps -aq -f status=running -f name=$JENKINS_CONTAINER`
IMAGE=jenkinsci/blueocean

start_jenkins () {
    echo "Starting fresh $JENKINS_CONTAINER"
    docker run -p 8080:8080 -p 50000:50000 --name $JENKINS_CONTAINER --detach $IMAGE
    echo "Jenkins machine available at http://locahost:/8080"
    return
}

stop_jenkins () {
    echo "Stopping $JENKINS_CONTAINER"
    docker stop $JENKINS_CONTAINER > /dev/null
    return
}

clean_jenkins () {
    echo "Removing $JENKINS_CONTAINER"
    docker rm $JENKINS_CONTAINER > /dev/null
    return
}

if [[ $1 = "start" ]]; then
    if [[ -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $JENKINS_CONTAINER is already exists!"
        if [[ -n $IS_CONTAINER_RUNNING ]]; then
            stop_jenkins
        fi
        clean_jenkins
    fi
    start_jenkins
elif [[ $1 = "stop" ]]; then
    if [[ ! -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $JENKINS_CONTAINER does not exist."
    elif [[ ! -n $IS_CONTAINER_RUNNING ]]; then
        echo "Container $JENKINS_CONTAINER is not running."
    else
        stop_jenkins
    fi
elif [[ $1 = "clean" ]]; then
    if [[ ! -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $JENKINS_CONTAINER does not exist."
    else
        if [[ -n $IS_CONTAINER_RUNNING ]]; then
            stop_jenkins
        fi
        clean_jenkins
    fi
fi
