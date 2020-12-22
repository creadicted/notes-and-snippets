module.exports = {
  siteMetadata: {
    title: 'Code notes',
    description: 'A collection of personal code snippets and mental notes',
    keywords: [],
  },
  plugins: [
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/creadicted/notes-and-snippets/tree/main/example/notes/git/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo:
          'https://labk.it/assets/logo.png',
        openSearch: {
          siteShortName: `Personal Notes`,
          siteUrl: 'http://labk.it/',
          siteTags: 'front-end',
          siteContact: '',
          siteDescription: 'A collection of personal code snippets and mental notes',
        },
      },
    },
  ],
}
