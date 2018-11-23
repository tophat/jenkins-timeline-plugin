package io.jenkins.plugins.jenkinstl;

import org.junit.Assert;
import org.junit.Test;

public class MenuItemTest {
    @Test
    public void shouldComposeTargetUrlProperly() {
        String mockUrl = "http://jenkinsbox.com/job/1";
        MenuItem item = new MenuItem(mockUrl);
        String composedUrl = item.getUrlName();
        String expected = "/plugin/pipeline-timeline/index.html?build_url="+mockUrl;
        Assert.assertEquals(composedUrl, expected);
    }
}