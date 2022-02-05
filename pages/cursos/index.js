import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Slider from "react-slick";
import { SettingsAdv } from "../../utils/settings";
import Seo from "../../components/Seo";
import { GraphQLClient } from "graphql-request";
import VideoCard from "../../components/VideoCard";
import { Grid } from "semantic-ui-react";
export async function getServerSideProps() {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );

  const data = await graphcms.request(`
  query {
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
      videos: data.videos,
    },
  };
}

export default function Index({ videos }) {
  return (
    <Layout>
      <Seo title={"DevFlorez | Cursos"} />
      <div className="cursos">
        <h1>Cursos</h1>
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
            alt="slider1"
          />
        </Slider>
        <div className="cursos__nofound">
          <p>Aun se están cocinando los cursos vuelve pronto.</p>
         
        </div>
        <div>
          <h1>Videos</h1>
          <Grid columns={3}>
            {videos.map((video, index) => (
              <Grid.Column key={index}>
                <VideoCard video={video} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
