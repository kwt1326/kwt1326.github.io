export const metadata = {
  title: 'Welcome to my blog',
  description: 'Dev & Life Blog',
}

export default function Blog() {
  return (
    <main>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
    </main>
  )
}
