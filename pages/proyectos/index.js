import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { Grid } from "semantic-ui-react";
import Seo from "../../components/Seo";
import ProjectCard from "../../components/ProjectCard";
import { GraphQLClient } from "graphql-request";
import NotFound from "../../components/NotFound/NotFound";
export async function getServerSideProps() {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );

  const data = await graphcms.request(`
  query {
    proyectos {
      titulo
      id
      tags
      imagenes {
        url
      }
      produccion
      recursos
      youtube
      github
      articulo
      descripcion
    }
  }
  

`);

  return {
    props: {
      proyectos: data.proyectos,
    },
  };
}
export default function index({proyectos}) {
  if (proyectos === []) {
    return <NotFound />;
  }
  return (
    <Layout>
      <Seo title={"DevFlorez | Proyectos"} />
      <div className="proyectos">
        <h1>Proyectos</h1>
        <Grid doubling columns={2}>
          {proyectos.map((proyecto) => (
            <Grid.Column key={proyecto.id}>
              <ProjectCard proyecto={proyecto} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
