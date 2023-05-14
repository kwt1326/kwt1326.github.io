export const getCategoryQuery = (name: string) => `
?filters[name][$eq][0]=${name}
&fields=name
&populate[posts]=posts
`

export const getCategoriesQuery = `
?fields=name
&populate[posts][populate]=*
&pagination[withCount]=true
`

export const categoryAllQuery = `
?fields=name
`