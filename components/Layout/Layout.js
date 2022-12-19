import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from "semantic-ui-react";
export default function Layout({ children }) {
  const isDecember = new Date().getMonth() === 11;

  useEffect(() => {
    if (isDecember) {
      const audio = document.getElementById("audio");
      audio.volume = 0.5;
      audio.play();
    }
  }, [isDecember]);

  return (
    <div className="Layout">
      <Container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>

      <audio id="audio" src="/songs/navidad.mp3" preload="auto" loop></audio>
    </div>
  );
}
