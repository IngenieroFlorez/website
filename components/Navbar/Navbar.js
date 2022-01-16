import React, { useState } from "react";
import { Menu, Grid, GridColumn, Sidebar } from "semantic-ui-react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Navbar">
      <Menu secondary>
        <Link href="/" passHref>
          <Menu.Item className="Navbar__logo">
            {" <"}
            <Icon icon="bx:bx-world" />
            {"DEVFLOREZ/>"}
          </Menu.Item>
        </Link>

        <Menu.Menu  position="right" className="Navbar__desktop">
          {ItemsMenu()}
        </Menu.Menu>
        <Menu.Menu  position="right" className="Navbar__mobile">
          <Menu.Item
            onClick={() => setVisible(!visible)}
            className={visible ? "active" : null}
          >
            <Icon icon="mdi:hamburger" width="30" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {visible ? (
        <Menu vertical secondary position="right">
          {ItemsMenu()}
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
}
const ItemsMenu = () => {
  const router = useRouter();
  return (
    <>
      <Link href="/" passHref>
        {router.pathname === "/" ? (
          <Menu.Item name="INICIO" active>
            INICIO
            <Icon icon="bx:bx-world" />
          </Menu.Item>
        ) : (
          <Menu.Item name="INICIO"></Menu.Item>
        )}
      </Link>
      <Link href="/cursos" passHref>
        {router.pathname === "/cursos" ? (
          <Menu.Item name="CURSOS" active>
            CURSOS
            <Icon icon="bx:bx-world" />
          </Menu.Item>
        ) : (
          <Menu.Item name="CURSOS" />
        )}
      </Link>
      <Link href="/articulos" passHref>
        {router.pathname === "/articulos" ? (
          <Menu.Item name={"¿QUIERES APRENDER?"} active>
            ARTÍCULOS
            <Icon icon="bx:bx-world" />
          </Menu.Item>
        ) : (
          <Menu.Item name={"¿QUIERES APRENDER?"}>ARTÍCULOS </Menu.Item>
        )}
      </Link>
      <Link href="/proyectos" passHref>
        {router.pathname === "/proyectos" ? (
          <Menu.Item name="PROYECTOS" active>
            PROYECTOS
            <Icon icon="bx:bx-world" />
          </Menu.Item>
        ) : (
          <Menu.Item name="PROYECTOS" />
        )}
      </Link>
      <Link href="/contacto" passHref>
        {router.pathname === "/contacto" ? (
          <Menu.Item name="CONTACTO" active>
            CONTACTO
            <Icon icon="bx:bx-world" />
          </Menu.Item>
        ) : (
          <Menu.Item name="CONTACTO" />
        )}
      </Link>
    </>
  );
};
