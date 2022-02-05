import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import moment from "moment";
import * as gtag from "../../lib/gtag";
import "moment/locale/es";
export default function ItemCard({
  id,
  slug,
  titulo,
  descripcion,
  categorias,
  fecha,
}) {
  const Analytics = () => {
    gtag.event({
      action: "click",
      category: "Articulo",
      label: slug,
      value: id,
    });
  };

  return (
    <div className="itemCard" id={id}>
      <div className="itemCard__title">
        <h3>{titulo}</h3>

        {categorias.map((categoria, index) => (
          <span className={categoria.categoria} key={index}>
            {categoria.titulo}
          </span>
        ))}
      </div>
      <div className="itemCard__content">
        <p>{descripcion}</p>
      </div>
      <div className="itemCard__footer">
        <Link href={`/articulos/${slug}`} passHref>
          <a onClick={() => Analytics()}>Leer más</a>
        </Link>
        <strong> {moment(fecha).fromNow()}</strong>
      </div>
    </div>
  );
}
