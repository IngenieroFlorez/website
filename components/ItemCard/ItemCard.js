import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import moment from "moment";
import "moment/locale/es";
export default function ItemCard({
  
  id,
  slug,
  titulo,
  descripcion,
  categorias,
  fecha,
}) {
 
  return (
    <div className="itemCard"   id={id}>
      <div className="itemCard__title">
        <Grid columns={2} textAlign="left" stretched>
          <Grid.Column>
            <h3>{titulo}</h3>
          </Grid.Column>

          <Grid.Column>
            <Grid
              columns={categorias.length == 0 ? 1 : categorias.length}
              doubling
            >
              {categorias.map((categoria, index) => (
                <Grid.Column key={index}>
                  <span className={categoria.categoria}>
                    {categoria.titulo}
                  </span>
                </Grid.Column>
              ))}
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
      <div className="itemCard__content">
        <p>{descripcion}</p>
      </div>
      <div className="itemCard__footer">
        <Link href={`/articulos/${slug}`} passHref>
          <a>Leer más</a>
        </Link>
        <strong> {moment(fecha).fromNow()}</strong>
      </div>
    </div>
  );
}
