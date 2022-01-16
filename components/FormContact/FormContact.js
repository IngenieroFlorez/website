import React, { useState } from "react";
import { Button, Form, Grid, Icon } from "semantic-ui-react";
import { GraphQLClient } from "graphql-request";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as gtag from "../../lib/gtag";
export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckyf5yg810lr201z3f2k84109/master"
  );

  const formik = useFormik({
    initialValues: InitialValues(),
    validationSchema: ValidationSchema(),
    onSubmit: async (values, { resetForm }) => {
      gtag.event({
        action: "Contacto",
        category: "Formulario",
        label: "Formulario de contacto",
        value:1,
      });
      setLoading(true);

      const response = await graphcms.request(
        `
      mutation  {
        createContacto(data:  { nombre: "${values.nombre}", correo: "${values.correo}", asunto: "${values.asunto}", mensaje: "${values.mensaje}" }) {
          id
          nombre
          correo
          asunto
          mensaje
          
        }
      }

          `
      );
      if (response !== null && response.createContacto !== null) {
        setLoading(false);
        toast.success("Formulario enviado correctamente", {
          className: "toast",
          position: "bottom-center",
        });
      } else {
        setLoading(false);
        toast.error("No se pudo enviar el formulario");
      }
      resetForm();
    },
  });

  return (
    <div className="formContact">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field error={formik.errors.nombre}>
            <label>Nombre</label>
            <input
              placeholder="Nombre"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Form.Field>
          <Form.Field error={formik.errors.correo}>
            <label>Email</label>
            <input
              name="correo"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.correo}
            />
          </Form.Field>
        </Form.Group>

        <Form.Field error={formik.errors.asunto}>
          <label>Asunto</label>
          <input
            name="asunto"
            placeholder="Asunto"
            onChange={formik.handleChange}
            value={formik.values.asunto}
          />
        </Form.Field>

        <Form.Field error={formik.errors.mensaje}>
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            onChange={formik.handleChange}
            value={formik.values.mensaje}
          />
        </Form.Field>
        <Button type="submit" className={loading ? "loading" : null}>
          Enviar
        </Button>
      </Form>
      <Toaster />
    </div>
  );
}

function InitialValues() {
  return {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };
}
function ValidationSchema() {
  return Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    correo: Yup.string()
      .email("El email no es válido")
      .required("El email es requerido"),
    asunto: Yup.string().required("El asunto es requerido"),
    mensaje: Yup.string().required("El mensaje es requerido"),
  });
}
