import Header from "./components/ui/Header";
import Container from "./components/ui/Container";
import { Fragment } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
    </Fragment>
  );
}
