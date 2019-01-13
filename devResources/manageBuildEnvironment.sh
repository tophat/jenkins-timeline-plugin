#!~/bin/sh

ENV_CONTAINER=pipeline_timeline_build_env
DOES_CONTAINER_ALREADY_EXIST=`docker ps -aq -f name=$ENV_CONTAINER`
IS_CONTAINER_RUNNING=`docker ps -aq -f status=running -f name=$ENV_CONTAINER`
IMAGE=maven:3.6.0-jdk-8

start_env () {
    echo "Starting fresh $ENV_CONTAINER"
    docker run --dns 8.8.8.8 --name $ENV_CONTAINER --detach -it $IMAGE /bin/bash
    echo "Copying files to $ENV_CONTAINER:/home"
    docker cp ./ $ENV_CONTAINER:/home
    echo "Use 'make exec_env' to enter the build environment."
    return
}

stop_env () {
    echo "Stopping $ENV_CONTAINER"
    docker stop $ENV_CONTAINER
    return
}

clean_env () {
    echo "Removing $ENV_CONTAINER"
    docker rm $ENV_CONTAINER
    return
}

exec_env () {
    docker exec -it $ENV_CONTAINER /bin/bash
    return
}

if [[ $1 = "start" ]]; then
    if [[ -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $ENV_CONTAINER is already exists!"
        if [[ -n $IS_CONTAINER_RUNNING ]]; then
            stop_env
        fi
        clean_env
    fi
    start_env
elif [[ $1 = "stop" ]]; then
    if [[ ! -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $ENV_CONTAINER does not exist."
    elif [[ ! -n $IS_CONTAINER_RUNNING ]]; then
        echo "Container $ENV_CONTAINER is not running."
    else
        stop_env
    fi
elif [[ $1 = "clean" ]]; then
    if [[ ! -n $DOES_CONTAINER_ALREADY_EXIST ]]; then
        echo "Container $ENV_CONTAINER does not exist."
    else
        if [[ -n $IS_CONTAINER_RUNNING ]]; then
            stop_env
        fi
        clean_env
    fi
elif [[ $1 = "exec" ]]; then
    if [[ -n $IS_CONTAINER_RUNNING ]]; then
        exec_env
    fi
fi

echo "All done!"
