package io.jenkins.plugins.jenkinstl;

import org.junit.Assert;

public class MenuItemTest {
    public void shouldComposeTargetUrlProperly() {
        String mockUrl = "http://jenkinsbox.com/job/1";
        MenuItem item = new MenuItem(mockUrl);
        String composedUrl = item.getUrlName();
        String expected = "/plugin/jenkins-timeline/index.html?build_url="+mockUrl;
        Assert.assertEquals(composedUrl, expected);
    }
}