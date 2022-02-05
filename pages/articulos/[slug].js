import React from "react";
import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import { Grid, List } from "semantic-ui-react";
import VideoCard from "../../components/VideoCard";
import Image from "next/image";
import Link from "next/link";
import NotFound from "../../components/NotFound/NotFound";
import Seo from "../../components/Seo";
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );

  const data = await graphcms.request(`
    query Articulo {
        articulo(where: {slug: "${slug}"}) {
          descripcion
          id
          titulo
          articulo {
            markdown
            html
          }
          createdAt
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
          videos {
            video
            portada {
              url
            }
          }
      }
      `);
  return {
    props: {
      articulo: data.articulo,
      categorias: data.categorias,
      video: data.videos.pop(),
    },
  };
}
export default function Slug({ articulo, categorias,video }) {
  if (articulo === null) {
    return <NotFound />;
  }
  return (
    <Layout>
      <Seo
        title={`DevFlorez | ${articulo.titulo}`}
        description={articulo.descripcion}
      />
      <div className="blog">
        <h1>{articulo.titulo}</h1>
        <Grid columns={2} doubling>
          <Grid.Column width={12}>
            <div className="blog__left">
              <div
                dangerouslySetInnerHTML={{ __html: articulo.articulo.html }}
              />
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
              <VideoCard  video={video}/>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </Layout>
  );
}
