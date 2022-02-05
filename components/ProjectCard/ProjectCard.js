import React from "react";
import { Button } from "semantic-ui-react";
import Slider from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function ProjectCard({ proyecto }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projectcard">
      <div className="projectcard__image">
        <Slider {...settings}>
          {proyecto.imagenes.map((imagen,index) => (
            <div key={index}>
              <Image
                src={imagen.url}
                width={1280}
                height={720}
                alt={proyecto.titulo}
                placeholder="blur"
                blurDataURL="/images/blur.png" 
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="projectcard__info">
        <h2>{proyecto.titulo}</h2>
        <p>{proyecto.descripcion}</p>
      </div>
      <div className="projectcard__tags">
        {proyecto.tags.map((tag) => (
          <div key={tag}>
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <div className="projectcard__buttons">
        <Button.Group>
          {proyecto.github && (
            <Button as="a" href={proyecto.github} target="_blank" rel="nofollow noopener noreferrer" >
              <Icon icon="akar-icons:github-fill" />
            </Button>
          )}
          {proyecto.articulo && (
            <Button as="a" href={proyecto.articulo} target="_blank" rel="nofollow noopener noreferrer">
              <Icon icon="ic:baseline-article" />
            </Button>
          )}
          {proyecto.youtube && (
            <Button as="a" href={proyecto.giyoutubethub} target="_blank" rel="nofollow noopener noreferrer">
              <Icon icon="akar-icons:youtube-fill" />
            </Button>
          )}
           {proyecto.recursos && (
            <Button as="a" href={proyecto.recursos} target="_blank" rel="nofollow noopener noreferrer">
              <Icon icon="fa-solid:archive" />
            </Button>
          )}
          {proyecto.produccion && (
            <Button as="a" href={proyecto.produccion} target="_blank" rel="nofollow noopener noreferrer">
             <Icon icon="bx:bx-world" />
            </Button>
          )}
        </Button.Group>
      </div>
    </div>
  );
}
