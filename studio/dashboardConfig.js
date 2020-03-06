export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e62c099681e20d738c09479',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5y3ggjqk',
                  apiId: 'f179a89f-79d3-4dd9-9ba0-0af67e47138c'
                },
                {
                  buildHookId: '5e62c09a810221d7d59161b7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cwiyor7s',
                  apiId: 'fdbbc32c-b052-4e94-a09f-8564687a2f21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swilkowska/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cwiyor7s.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
