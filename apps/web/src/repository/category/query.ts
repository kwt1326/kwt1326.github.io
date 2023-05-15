export const getCategoryQuery = (name: string) => `
?filters[name][$eq][0]=${name}
&fields=name
&populate[posts]=posts
`

export const getCategoriesQuery = `
?fields=name
&populate[posts][populate][thumbnail]=posts.thumbnail
&populate[posts][populate][categories]=posts.categories
&pagination[withCount]=true
`

export const categoryAllQuery = `
?fields=name
`