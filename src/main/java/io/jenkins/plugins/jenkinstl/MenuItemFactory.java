package io.jenkins.plugins.jenkinstl;

import hudson.Extension;
import hudson.model.Action;
import java.util.Collection;
import java.util.Collections;
import jenkins.model.TransientActionFactory;
import org.jenkinsci.plugins.workflow.job.WorkflowRun;

@Extension
public class MenuItemFactory extends TransientActionFactory<WorkflowRun> {
    @Override
    public Class<WorkflowRun> type() {
        return WorkflowRun.class; 
    }

    @Override
    public Collection<? extends Action> createFor(WorkflowRun build) {
        String buildUrl = build.getAbsoluteUrl();
        return Collections.singleton(new MenuItem(buildUrl)); 
    }
}