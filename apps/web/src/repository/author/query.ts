export const getAuthorQuery = (author: string) => `
?filters[name][$eq][0]=${author}
&populate=*
`