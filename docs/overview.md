---
id: overview
title: Overview
---
<a href="https://jenkins.io/">
<img alt="Build" src="https://img.shields.io/circleci/project/github/tophat/jenkins-timeline-plugin.svg"/>
</a>
<a href="https://circleci.com/gh/tophat/jenkins-timeline-plugin">
<img alt="Jenkins version" src="https://img.shields.io/badge/jenkinsci-%3E%3D2.7.3-brightgreen.svg"/>
</a>
<a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">
<img alt="Java version" src="https://img.shields.io/badge/JDK-8-brightgreen.svg"/>
</a>
<a href="https://www.npmjs.com/package/react">
<img alt="React version" src="https://img.shields.io/badge/ReactJS-%3E%3D16.6.3-brightgreen.svg"/>
</a>

Jenkins TL is a Jenkins plugin that allows users to gain knowledge about the execution of their pipeline builds. Using the Jenkins timeline plugin we are able to identify sequential and parallel steps in a pipeline. This plugins gives us awareness and intuition about how long each step takes as well as what steps would have the most impact if optimized.

# Installation

## Manual build

_Make sure that you follow the [development setup and building](#Setting-up-a-development-environment) steps before you attempt building your own plugin package._
- Clone the repository and use `make build_all` to build the plugin `hpi` package.
- _After a successful build, the packaged file is available in `target/jenkins-timeline.hpi`._
- In Jenkins, head to __Manage Jenkins__ > __Manage Plugins__ and use the __Upload Plugin__ functionality available under the __Advanced__ tab.
- You might be prompted to restart Jenkins after installing the plugin.

### Using the JenkinsCI repository

_Available soon!_

