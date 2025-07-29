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

const BASE_URL = 'https://graphql.datocms.com'

export async function cmsService({ query }) {
  const ENDPOINT = BASE_URL
  const currentToken = process.env.REACT_APP_DATO_TOKEN

  if (!currentToken) {
    throw new Error(`REACT_APP_DATO_TOKEN não definido.`)
  }

  try {
    const projectContentResponse = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + currentToken
      },
      body: JSON.stringify({ query })
    }).then(async (res) => {
      const body = await res.json()
      console.log('body', body)
      if (!body.errors) return body

      throw new Error(JSON.stringify(body))
    })

    return projectContentResponse.data
  } catch (err) {
    throw new Error(err.message)
  }
}