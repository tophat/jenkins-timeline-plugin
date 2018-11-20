package io.jenkins.plugins.jenkinstl;

import hudson.model.Action;
import java.util.Collection;
import org.jenkinsci.plugins.workflow.job.WorkflowJob;
import org.jenkinsci.plugins.workflow.job.WorkflowRun;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.jvnet.hudson.test.JenkinsRule;

public class MenuItemFactoryTest {
    @Rule
    public JenkinsRule jenkins = new JenkinsRule();

    private MenuItemFactory factory = new MenuItemFactory();
    
    @Test
    public void shouldCreateAMenuItemActionForWorkflowRuns() throws Exception {
        WorkflowJob job = jenkins.createProject(WorkflowJob.class, "some-line-of-pipes");
        WorkflowRun wfrun = new WorkflowRun(job);
        Collection<? extends Action> actions = factory.createFor(wfrun);
        Assert.assertTrue(actions.size() == 1);
        Assert.assertTrue(actions.toArray()[0] instanceof MenuItem);
    }
}