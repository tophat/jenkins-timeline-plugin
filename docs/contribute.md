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

### Compatibility note
The linked version of Java (JDK 8) is the preferred version for this project, as Maven seems to have trouble building with other versions.

### Jenkins setup
When installing Jenkins, make sure to allow the installer to add the recommended plugins to Jenkins. This project depends on the [`pipeline`](https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin) plugin, installed by default as part of the recommended package.

## Building

The makefile is set up with a few useful commands to abstract away `mvn` calls. Call `make build_and_export` to build the `hpi` file that you can import in your Jenkins instance to install the plugin.

You can find a sample [Jenkinsfile](../devResources/SampleJenkinsfile) under `/devResources` if you need a sample pipeline to visualize or start from.

### Working on the web app

The Node application that is run by the plugin can be worked on without having to rebuild and reinstall the plugin in Jenkins.

To run the web app independently of the rest of the plugin, deactivate your Jenkins instance's security (__Manage Jenkins__ > __Configure Global Security__, untick the __Enable security__ checkbox and apply/save the changes) and alter the web app code as follows:

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

These two changes will ensure that the API requests to Jenkins' Workflow API will reach the endpoints properly. Disabling the security will avoid the web app hitting Jenkins' CORS protection.

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
