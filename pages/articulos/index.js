import React from "react";
import { Grid, List } from "semantic-ui-react";
import Layout from "../../components/Layout";
import ItemCard from "../../components/ItemCard";

import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import VideoCard from "../../components/VideoCard";
import Seo from "../../components/Seo";

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
export default function Index({ articulos, categorias }) {

  return (
    <Layout>
       <Seo  title={"DevFlorez | Artículos"}/>
      <div className="blog">
        <h1>Artículos</h1>
        <Grid columns={2} doubling>
          <Grid.Column width={12}>
            <div className="blog__left">
              <h2>Últimos artículos</h2>
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
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="blog__right">
              <h2>Categorías</h2>
              <List>
                {categorias.map((categoria) => (
                  <Link
                    href="/categorias/[categoria]"
                    as={`/categorias/${categoria.categoria}`}
                    key={categoria.id}
                  >
                    <a>
                      <List.Item>
                        <List.Header>{categoria.titulo}</List.Header>
                        <List.Content>
                          <Image
                            src={categoria.imagen.url}
                            alt={categoria.titulo}
                            width={50}
                            height={50}
                          />
                        </List.Content>
                      </List.Item>
                    </a>
                  </Link>
                ))}
              </List>
              <h2>Último video</h2>
              <VideoCard />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Layout>
  );
}
