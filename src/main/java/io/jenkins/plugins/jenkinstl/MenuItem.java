package io.jenkins.plugins.jenkinstl;

import hudson.model.Action;

public class MenuItem implements Action {
    public MenuItem() {}

    @Override
    public String getIconFileName() {
        return "plugin/jenkins-timeline/jenkinstl.png";
    }

    @Override
    public String getDisplayName() {
        return "Build timeline";
    }

    @Override
    public String getUrlName() {
        return "/plugin/jenkins-timeline/index.html";
    }
}