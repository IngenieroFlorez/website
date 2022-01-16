import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description } = props;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta
        property="keywords"
        content="cursos,aprender,online,programacion, diseño, arduino, robotica, nextjs, react,sematic,ccs,html  "
      />
    </Head>
  );
}
Seo.defaultProps = {
  title: "DevFlorez | Cursos de programacion y robotica gratis en linea",
  description:
    "Soy ingeniero mecatrónico con alma de desarrollador frontend y quiero enseñarte todo lo que he aprendió en mis estudios, haciendo una gran combinación entre la mecatrónica y el desarrollo web. ¿Qué te parece un proyecto en NextJS más,Arduino?",
};
