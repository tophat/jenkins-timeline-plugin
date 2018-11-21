# Overview

[![Builds](https://img.shields.io/circleci/project/github/tophat/jenkins-timeline-plugin.svg)](https://circleci.com/gh/tophat/jenkins-timeline-plugin)

Jenkins Timeline Plugin

Jenkins TL is a jenkins plugin that allows users to gain knowledge about the execution of their builds.


## Motivation

Using the jenkins timeline we are able to identify sequential and paralell steps in a pipeline. This plugins gives us awareness and intuition about how long each step takes as well as what steps would have the most impact if optimized.

## Installation

### By building yourself

_Make sure that you follow the [Contributing/Building]() steps before you attempt building your own plugin package.
- Clone the repository and use `make build_all` to build the plugin `hpi` package.
- In Jenkins, head to __Manage Jenkins__ > __Manage Plugins__ and use the __Upload Plugin__ functionality available under the __Advanced__ tab.
- You might be prompted to restart Jenkins after installing the plugin.

## Usage

![Jenkins pipeline build menu](assets/jenkins_menu.png)

The plugin adds a __Build Timeline__ link in every Pipeline build page menu. Clicking it will open up the build timeline. 

## Contributing

### Setting up a development environment

To work on the project, you will need ...

- [Maven 3.1.0+](https://maven.apache.org/download.cgi);
- [A Java development environment](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html);
- [A local instance of Jenkins](https://jenkins.io/doc/book/installing/);

__Compatibility note__: The linked version of Java (JDK 8) is the preferred version for this project, as Maven seems to have trouble building with other versions.

#### Common errors

If a `java.nio.file.NoSuchFileException` about `hudson.Extension` prevents building using `make build`, make sure that you have set up your `JAVA_HOME` properly.

In `~/.bash_profile`, make sure to export it as:

```
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
```

### Building

The makefile is set up with a few useful commands to abstract away `mvn` calls. Call `make build` to build the `hpi` file that you can import in your Jenkins instance to install the plugin.

## Contributors
Thanks goes to these wonderful people [emoji key](https://github.com/kentcdodds/all-contributors#emoji-key):

| [<img src="https://avatars.githubusercontent.com/u/39271619?s=100" width="100px;"/><br /><sub><b>Brandon Baksh</b></sub>](https://github.com/brandonbaksh)<br />[📖](https://github.com/tophat/jenkins-timeline-plugin/commits?author=brandonbaksh) | [<img src="https://avatars0.githubusercontent.com/u/6210361?s=400&v=4" width="100px;"/><br /><sub><b>Marc Cataford</b></sub>](https://github.com/mcataford)<br />[💻](https://github.com/tophat/jenkins-timeline-plugin/commits?author=mcataford) |
|---|---|

We welcome contributions from the community, Top Hatters and non-Top Hatters alike. Check out our [contributing guidelines](CONTRIBUTING.md) for more details.

## Credits
Thanks to [Carol Skelly](https://github.com/iatek) for donating the github organization!
