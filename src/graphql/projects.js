/* QUERIES GRAPHQL */

export const projectsQuery = `
  query {
    allContentProjects {
      id
      thumbnail {
        url
        alt
      }
      stacks
      title
      description {
        value
      }
      projectWebsite
      projectCode
      reverse
    }
  }
`

export const gridProjectsQuery = `
  query {
    allContentProjects(first: 6, orderBy: _createdAt_DESC) {
      id
      title
      thumbnail {
        url
        alt
      }
    }
  }
`