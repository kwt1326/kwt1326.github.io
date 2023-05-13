import Header from "./components/ui/Header"
import Container from "./components/ui/Container"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}