package io.jenkins.plugins.jenkinstl;

import hudson.model.Action;

public class MenuItem implements Action {
    private String buildUrl;

    public MenuItem(String buildUrl) {
        this.buildUrl = buildUrl;
    }

    @Override
    public String getIconFileName() {
        return "plugin/pipeline-timeline/jenkins_assets/logo_sidepanel.png";
    }

    @Override
    public String getDisplayName() {
        return "Build timeline";
    }

    @Override
    public String getUrlName() {
        return "/plugin/pipeline-timeline/index.html?build_url="+this.buildUrl;
    }
}