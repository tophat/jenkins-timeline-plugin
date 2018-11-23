const siteConfig = {
    title: 'Jenkins Timeline Plugin',
    tagline: 'A build timeline to facilitate the inspection of Jenkins pipelines and identify bottlenecks',
    // For deploy
    cname: 'jenkinstimeline.com',
    url: 'https://jenkinstimeline.com',
    baseUrl: '/',
    projectName: 'jenkins-timeline-plugin',
    organizationName: 'tophat',
    // End deploy options
    headerLinks: [
        { doc: 'overview', label: 'Docs' },
        { href: "https://github.com/tophat/jenkins-timeline-plugin", label: "GitHub" },
    ],
    headerIcon: 'img/jenkins.png',
    footerIcon: 'img/jenkins.png',
    favicon: 'img/favicon.png',
    colors: {
        primaryColor: '#d33238',
        secondaryColor: '#d33238',
    },
    customDocsPath: 'docs',
    gaTrackingId: '',

    copyright: 'Top Hat Open Source',

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate', // On page navigation for the current documentation page.
    cleanUrl: true, // No .html extensions for paths.

    // Open Graph and Twitter card images.
    ogImage: 'img/jenkins.png',
    twitterImage: 'img/jenkins.png',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
}

module.exports = siteConfig
