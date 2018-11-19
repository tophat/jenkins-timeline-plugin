package io.jenkins.plugins.jenkinstl;

import jenkins.model.TransientActionFactory;
import hudson.model.Action;
import java.util.Collection;
import java.util.Collections;
import hudson.Extension;
import hudson.model.Build;

@Extension
public class MenuItemFactory extends TransientActionFactory<Build> {
    @Override
    public Class<Build> type() {
        return Build.class; 
    }

    @Override
    public Collection<? extends Action> createFor(Build build) {
        return Collections.singleton(new MenuItem()); 
    }
}