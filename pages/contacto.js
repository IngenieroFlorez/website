import React from "react";
import Layout from "../components/Layout";
import FormContact from "../components/FormContact/FormContact";
import { Grid, List, Icon } from "semantic-ui-react";
import Slider from "react-slick";
import ItemCard from "../components/ItemCard";
import Seo from "../components/Seo";
import { GraphQLClient } from "graphql-request";


export async function getServerSideProps(context) {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );
  const data = await graphcms.request(`
  query Articulos {
    articulos(orderBy: createdAt_DESC) {
      id
      slug
      titulo
      descripcion
      categorias {
        categoria
        titulo
      }
      publishedAt
    }
    categorias {
      categoria
      id
      titulo
      imagen {
        id
        url
      }
    }
  }
    `);
  return {
    props: {
      articulos: data.articulos,
      categorias: data.categorias,
    },
  };
}
export default function Contacto({ articulos }) {
  const SettingsAdv = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Layout>
      <Seo  title={"DevFlorez | Contacto"}/>
      <div className="contacto">
        <h1>¿Quieres contactarme?</h1>
        <Grid columns={2} doubling>
          <Grid.Column>
            <FormContact />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="contacto__right">
              <h2>¿Necesista ayuda?</h2>
              <p>
                Talvez el problema que tengas sea un poco difícil de resolver,
                pero no te preocupes, puedes contactarme por medio de los
                siguientes medios:
              </p>
              <List horizontal>
                <List.Item>
                  <a href="mailto: ingenieroflorezco@gmail.com" target="_blank" rel="noreferrer">
                    <Icon name="mail" />
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://api.whatsapp.com/send?phone=+573059167954&text=Hola,%20vengo%20de%20la%20pagina%20de%20DevFlorez%20y%20estoy%20interesado." target="_blank" rel="noreferrer">
                    <Icon name="whatsapp" />
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.instagram.com/devflorez/" target="_blank" rel="noreferrer">
                    <Icon name="instagram" />
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://twitter.com/DevFlorez?s=09" target="_blank" rel="noreferrer">
                    <Icon name="twitter" />
                  </a>
                </List.Item>
              </List>
              <h2>¿Talvez lo que busques está aquí?</h2>
              <Slider {...SettingsAdv}>
                {articulos.map((articulo) => (
                  <ItemCard
                    key={articulo.id}
                    id={articulo.id}
                    slug={articulo.slug}
                    titulo={articulo.titulo}
                    descripcion={articulo.descripcion}
                    categorias={articulo.categorias}
                    fecha={articulo.publishedAt}
                  />
                ))}
              </Slider>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Layout>
  );
}
