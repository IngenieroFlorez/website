import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from "semantic-ui-react";
export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
