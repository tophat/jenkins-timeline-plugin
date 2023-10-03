<div align="center">
<img src="website/static/img/logo.png"/>
</div>
<div align="center">
<strong>
Jenkins Timeline (TL) Plugin
</strong>
</div>
<br>
<div align="center">
    <a href="https://plugins.jenkins.io/pipeline-timeline">
        <img alt="Package" src="https://img.shields.io/jenkins/plugin/v/pipeline-timeline.svg"/>
    </a>
    <a href="https://plugins.jenkins.io/pipeline-timeline">
        <img alt="Installs" src="https://img.shields.io/jenkins/plugin/i/pipeline-timeline.svg"/>
    </a>
    <a href="https://github.com/tophat/jenkins-timeline-plugin/actions/workflows/main.yml">
        <img alt="Build" src="https://github.com/tophat/jenkins-timeline-plugin/actions/workflows/main.yml/badge.svg"/>
    </a>
    <a href="https://jenkins.io">
        <img alt="Jenkins version" src="https://img.shields.io/badge/jenkinsci-%3E%3D2.7.3-brightgreen.svg"/>
    </a>
    <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">
        <img alt="Java version" src="https://img.shields.io/badge/JDK-8-brightgreen.svg"/>
    </a>
    <a href="https://www.npmjs.com/package/react">
        <img alt="React version" src="https://img.shields.io/badge/ReactJS-%3E%3D16.6.3-brightgreen.svg"/>
    </a>
    <br />
    <a href="#contributors">
        <img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square"/>
    </a>
    <a href="https://discord.gg/YhK3GFcZrk">
        <img alt="Discord" src="https://img.shields.io/discord/809577721751142410"/>
    </a>
    <a href="https://github.com/tophat/getting-started/blob/master/scorecard.md">
        <img alt="Maturity Score" src="https://img.shields.io/badge/Maturity-Level%203%20--%20Stable-green.svg"/>
    </a>
</div>

# Overview

Jenkins TL is a Jenkins plugin that allows users to gain knowledge about the execution of their pipeline builds.

## Motivation

Using the Jenkins timeline plugin we are able to identify sequential and parallel steps in a pipeline. This plugins gives us awareness and intuition about how long each step takes as well as what steps would have the most impact if optimized.

# Installation

## Manual build

_Make sure that you follow the [development setup and building](docs/contribute.md#Setting-up-a-development-environment) steps before you attempt building your own plugin package._
- Clone the repository and use `make build_and_export` to build the plugin `hpi` package.
- _After a successful build, the packaged file is available in `target/jenkins-timeline.hpi`._
- In Jenkins, head to __Manage Jenkins__ > __Manage Plugins__ and use the __Upload Plugin__ functionality available under the __Advanced__ tab.
- You might be prompted to restart Jenkins after installing the plugin.

### Using the JenkinsCI repository

_Available soon!_

# Usage

The plugin adds a __Build Timeline__ link in every Pipeline build page menu. Clicking it will open up the build timeline in a new tab.

<div align="center">
<img src="./website/static/img/jenkins_menu.png"/>
</div>

The timeline can be opened during a build for an incremental breakdown of the job or after a build is completed for an overview of old jobs.

<div align="center">
<img src="./website/static/img/timeline.png"/>
</div>

# Contributing

See the [contributing guide](docs/contribute.md) for how to contribute!

## Releasing a new version

_Before you can release, you will need to have write access on [the Jenkinsci repo](https://github.com/jenkinsci/pipeline-timeline-plugin)_

To release, clone the _jenkinsci_ fork locally and set up Maven according to [the documentation](https://wiki.jenkins.io/display/JENKINS/Hosting+Plugins#HostingPlugins-Releasingtojenkins-ci.org) (see the section about `settings.xml` and `settings-security.xml`.

When you are all set up, just run `make publish` to start the process.

# Contributors
Thanks goes to these wonderful people [emoji key](https://github.com/kentcdodds/all-contributors#emoji-key):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://marccataford.com"><img src="https://avatars2.githubusercontent.com/u/6210361?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marc Cataford</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=mcataford" title="Code">💻</a> <a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=mcataford" title="Documentation">📖</a> <a href="#infra-mcataford" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#platform-mcataford" title="Packaging/porting to new platform">📦</a></td>
    <td align="center"><a href="https://github.com/sjoanes"><img src="https://avatars3.githubusercontent.com/u/5768264?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sjoanes</b></sub></a><br /><a href="#ideas-sjoanes" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=sjoanes" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/brandonbaksh/"><img src="https://avatars1.githubusercontent.com/u/39271619?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Baksh</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=brandonbaksh" title="Documentation">📖</a></td>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars2.githubusercontent.com/u/3534236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=jakebolam" title="Documentation">📖</a> <a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://breezio.com"><img src="https://avatars1.githubusercontent.com/u/445636?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siavash Mahmoudian</b></sub></a><br /><a href="#infra-syavash" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://opensource.tophat.com"><img src="https://avatars0.githubusercontent.com/u/6020693?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shouvik DCosta</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=sdcosta" title="Documentation">📖</a></td>
    <td align="center"><a href="https://jenkinstimeline.com"><img src="https://avatars0.githubusercontent.com/u/46076627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jenkins-timeline-bot</b></sub></a><br /><a href="#infra-jenkins-timeline-bot" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/chrono"><img src="https://avatars3.githubusercontent.com/u/76803?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Ringehahn</b></sub></a><br /><a href="#question-chrono" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/vuphuong245"><img src="https://avatars0.githubusercontent.com/u/28992225?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vuphuong245</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=vuphuong245" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Taeloz"><img src="https://avatars2.githubusercontent.com/u/32245517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matthew Brunton</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=Taeloz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/KimiJL"><img src="https://avatars.githubusercontent.com/u/25181701?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kimi Li</b></sub></a><br /><a href="https://github.com/tophat/jenkins-timeline-plugin/commits?author=KimiJL" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

We welcome contributions from the community, Top Hatters and non-Top Hatters alike. Check out our [contributing guidelines](CONTRIBUTING.md) for more details.

# Credits
Thanks to [Carol Skelly](https://github.com/iatek) for donating the github organization!
