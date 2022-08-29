const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string

const fetchAPI = async (query: string, { variables } : any = {}) {

  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export const getPosts = async () => {
  const data = await fetchAPI(`
    query getPosts {
      posts {
        edges {
          node {
            id
            slug
            title
            excerpt
            date
            categories {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);
  return data.posts
}