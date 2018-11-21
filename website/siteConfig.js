const siteConfig = {
    title: 'Jenkins Timeline Plugin',
    tagline: 'Jenkins Timeline Plugin',
    // For deploy
    cname: 'jenkins-timeline-plugin.js.org',
    url: 'https://tophat.github.io',
    baseUrl: '/jenkins-timeline-plugin/',
    projectName: 'jenkins-timeline-plugin',
    organizationName: 'tophat',
    // End deploy options
    headerLinks: [
        { doc: 'overview', label: 'Docs' },
        { href: "https://github.com/tophat/jenkins-timeline-plugin", label: "GitHub" },
    ],
    headerIcon: 'img/yarn.png',
    footerIcon: 'img/yarn.png',
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
    ogImage: 'img/yarn.png',
    twitterImage: 'img/yarn.png',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
}

module.exports = siteConfig
