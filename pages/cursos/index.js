import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Slider from "react-slick";
import { SettingsAdv } from "../../utils/settings";
export default function Index() {
  return (
    <Layout>
      <div className="cursos">
        
  
        <h1>Cursos</h1>
        <Slider {...SettingsAdv}>
          <Image src="/images/slider1.png" width={1546} height={423} alt="slider1" />
          <Image src="/images/slider2.png" width={1546} height={423} alt="slider1" />
        </Slider>
        <div className="cursos__nofound">
        
        <p>Aun se están cocinando los cursos vuelve pronto.</p>
        <iframe src="https://giphy.com/embed/TinVZMHa7yP1m"  className="gif" frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/homer-simpson-the-simpsons-TinVZMHa7yP1m">via GIPHY</a></p>

      </div>
      </div>
    </Layout>
  );
}
