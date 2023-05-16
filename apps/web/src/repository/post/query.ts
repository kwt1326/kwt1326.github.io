export const getPostPopulateQuery = (title: string) => `
?filters[title][$eq][0]=${title}
&populate[categories]=categories
&populate[thumbnail]=thumbnail
&populate[author][populate]=*
`

export const postAllQuery = `
?sort[0]=publishedAt:desc
&fields[0]=title
&fields[1]=content
&populate[categories]=categories
&populate[thumbnail]=thumbnail
&pagination[withCount]=true
`