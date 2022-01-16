import Layout from "../components/Layout";
import { Grid, List, Button } from "semantic-ui-react";
import Image from "next/image";
import Slider from "react-slick";
import { SettingsAdv, SettingsVideo } from "../utils/settings";
import VideoCard from "../components/VideoCard";
import ItemCard from "../components/ItemCard";
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
    },
  };
}

export default function Home({ articulos }) {
  return (
    <Layout>
      <div className="Home">
        <Grid centered doubling columns={2}>
          <Grid.Column>
            <div className="Home__left">
              <h1>Hola Mundo. Bienvidos a mi sitio web</h1>
              <p>
                Soy ingeniero mecatrónico con alma de desarrollador frontend y
                quiero enseñarte todo lo que he aprendió en mis estudios,
                haciendo una gran combinación entre la mecatrónica y el
                desarrollo web. ¿Qué te parece un proyecto en NextJS más
                Arduino?
              </p>
              <List horizontal>
                <List.Item>
                  <Image src="/images/JS.png" width={90} height={90} alt="JS" />
                </List.Item>
                <List.Item>
                  <Image
                    src="/images/Robot.png"
                    width={90}
                    height={90}
                    alt="Robot"
                  />
                </List.Item>
                <List.Item>
                  <Image
                    src="/images/React.png"
                    width={90}
                    height={90}
                    alt="React"
                  />
                </List.Item>
              </List>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Image
              src="/images/DevFlorezLogo.svg"
              alt="logo"
              width={550}
              height={350}
              layout="responsive"
            />
          </Grid.Column>
        </Grid>
        <div className="Home__slider">
          <Slider {...SettingsAdv}>
            <Image
              src="/images/slider1.png"
              width={1546}
              height={423}
              alt="slider1"
            />
            <Image
              src="/images/slider2.png"
              width={1546}
              height={423}
              alt="slider2"
              layout="responsive"
            />
          </Slider>
        </div>
        <div className="Home__posts">
          <h2>Ultimos videos</h2>
          <Slider {...SettingsVideo}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </Slider>
          <h2>Últimos artículos</h2>
          {articulos.map((articulo, index) => (
            <div key={index}>
              <ItemCard
                id={articulo.id}
                slug={articulo.slug}
                titulo={articulo.titulo}
                descripcion={articulo.descripcion}
                categorias={articulo.categorias}
                fecha={articulo.publishedAt}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
// <Button>+</Button>
