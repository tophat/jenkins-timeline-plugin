---
id: contributing
title: Contributing
---

## Setting up a development environment

To work on the project, you will need ...

- [Maven 3.1.0+](https://maven.apache.org/download.cgi);
- [A Java development environment (JDK 8)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html);
- [A local instance of Jenkins](https://jenkins.io/doc/book/installing/);
- [npm](https://www.npmjs.com/get-npm);

__You can either install all of these on your machine, or use the Docker-based shortcuts included in the `Makefile`.__

### Docker-based development environment

You can leverage the power of Docker to avoid having to set up the development environment on your machine:

Any of the following can be used by typing `make <cmd>` given you have Docker installed:

| Command | Definition |
|:---|:---|
|`start_jenkins`|Starts a Jenkins docker machine bound to port 8080. Terminates any previous instance of itself.|
|`stop_jenkins`|Stops a running instance of the Jenkins docker machine.|
|`clean_jenkins`|Removes an existing instance of the Jenkins docker machine.|
|`start_env`|Starts a docker machine set up with a copy of the local plugin files and Maven.|
|`stop_env`|Stops a runnign instance of the build environment docker machine.|
|`clean_env`|Removes an existing instance of the build environment.|
|`exec_env`|Gives you console access to the build environment docker machine.|
|`build_and_export`|Builds the plugin package from the local files in the build environment and exports the `hpi` artifact to your local work directory.|

### Compatibility note
The linked version of Java (JDK 8) is the preferred version for this project, as Maven seems to have trouble building with other versions.

### Jenkins setup
When installing Jenkins, make sure to allow the installer to add the recommended plugins to Jenkins. This project depends on the [`pipeline`](https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin) plugin, installed by default as part of the recommended package.

## Building

The makefile is set up with a few useful commands to abstract away `mvn` calls. Call `make build_and_export` to build the `hpi` file that you can import in your Jenkins instance to install the plugin.

You can find a sample [Jenkinsfile](../devResources/SampleJenkinsfile) under `/devResources` if you need a sample pipeline to visualize or start from.

### Working on the web app

The Node application that is run by the plugin can be worked on without having to rebuild and reinstall the plugin in Jenkins.

To run the web app independently of the rest of the plugin:
Alter the web app code as follows:

```
//In webapp_src/src/index.js
const buildUrl = [hardcoded build URL taken from Jenkins]

//In webapp_src/src/components/Dashboard.js
...
getStageInfo = stageEndpoint => {
        stageEndpoint = [Jenkins base URL] + stageEndpoint
        return axios.get(stageEndpoint)
        ...
...
```

These two changes will ensure that the API requests to Jenkins' Workflow API will reach the endpoints properly.

Disabling the security and prevent the web app hitting Jenkins' CORS protection by following [these steps](https://www.jenkins.io/doc/book/system-administration/security/#disabling-security) and using [CORS Filter Plugin](https://plugins.jenkins.io/cors-filter/)

__Make sure to revert those two changes before opening up a PR or building the plugin.__

From within the `webapp_src` directory, you can use the scripts defined in `packages.json`: `npm run start` and `npm run test` to start the application and run the test suites, respectively.

## Common errors

### `java.nio.file.NoSuchFileException` during builds

If a `java.nio.file.NoSuchFileException` about `hudson.Extension` prevents building using `make build`, make sure that you have set up your `JAVA_HOME` properly.

In `~/.bash_profile`, make sure to export it as:

```
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
```

## Have a question that wasn't answered?

Join our [slack community](https://opensource.tophat.com/slack) and ask!
