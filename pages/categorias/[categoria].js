import React from "react";
import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import { Grid, List, Header } from "semantic-ui-react";
import ItemCard from "../../components/ItemCard";
import Image from "next/image";
import Link from "next/link";
import VideoCard from "../../components/VideoCard";
import Seo from "../../components/Seo";
import NotFound from "../../components/NotFound/NotFound";
export async function getServerSideProps(context) {
  const { params } = context;
  const { categoria } = params;
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );

  const data = await graphcms.request(`
    query Categoria {
        categorias {
            categoria
            id
            titulo
            imagen {
              id
              url
            }
            articulo {
                id
                titulo
                descripcion
                slug
                categorias {
                  categoria
                  titulo
                }
              }
          }
          videos {
            video
            portada {
              url
            }
          }
      }
      
        `);

  const category = data.categorias.find((c) => c.categoria === categoria);

  return {
    props: {
      categoria: category,
      categorias: data.categorias,
      video: data.videos.pop(),
    },
  };
}
export default function Categoria({ categoria, categorias , video}) {
  const { titulo, articulo } = categoria;
  if (categoria === null) {
    return <NotFound />;
  }
  return (
    <Layout>
           <Seo  title={`DevFlorez | ${titulo}`}/>
      <div className="blog">
        <h1>{titulo}</h1>

        <Grid columns={2} textAlign="center" doubling>
          <Grid.Column width={12}>
            <div className="blog__left">
              <h2>Últimos artículos</h2>
              {articulo.length > 0 &&
                articulo.map((articulo) => (
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
              {articulo.length === 0 && (
                <div className="proyectos__nofound">
                  <p>Aun se están cocinando los articulos vuelve pronto.</p>
                  <iframe
                    src="https://giphy.com/embed/srBH5iwo7W15C"
                 className="gif"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <p>
                    <a href="https://giphy.com/gifs/homer-con-cocinando-srBH5iwo7W15C">
                      via GIPHY
                    </a>
                  </p>
                </div>
              )}
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
              <VideoCard video={video} />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Layout>
  );
}
