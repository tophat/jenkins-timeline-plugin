package io.jenkins.plugins.jenkinstl;

import hudson.model.Action;

public class MenuItem implements Action {
    private String buildUrl;

    public MenuItem(String buildUrl) {
        this.buildUrl = buildUrl;
    }

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
        return "/plugin/jenkins-timeline/index.html?build_url="+this.buildUrl;
    }
}