import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { Grid } from "semantic-ui-react";
export default function index() {
  return (
    <Layout>
      <div className="proyectos">
        <h1>Proyectos</h1>

        <div className="proyectos__nofound">
        
          <p>Aun se están cocinando los proyectos vuelve pronto.</p>
          <iframe src="https://giphy.com/embed/srBH5iwo7W15C" className="gif" frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/homer-con-cocinando-srBH5iwo7W15C">via GIPHY</a></p>

        </div>
      </div>
    </Layout>
  );
}
