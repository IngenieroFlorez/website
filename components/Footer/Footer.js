import React from "react";
import { List, Grid } from "semantic-ui-react";
import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <div className="Footer">
      <Grid centered stackable columns={3}>
        <Grid.Column className="Footer__left">
          <h3> Copyright © Todos los derechos reservados a DevFlorez</h3>
          <p> Directo todos los sabados y domingos</p>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <h3>
            {" <"}
            <Icon icon="bx:bx-world" />
            {"DEVFLOREZ/>"}
          </h3>
        </Grid.Column>
        <Grid.Column className="Footer__right">
          <List horizontal>
            <List.Item as="a" href="https://github.com/IngenieroFlorez" target="_blank" rel="noreferrer">
              <Icon icon="akar-icons:github-fill" height="45" />
            </List.Item>
            <List.Item as="a" href="https://vm.tiktok.com/ZMLeetfQ8/" target="_blank" rel="noreferrer">
              <Icon icon="ph:tiktok-logo-fill"  height="45" />
            </List.Item>

            <List.Item as="a" href="https://www.twitch.tv/ingenieroflorez" target="_blank" rel="noreferrer">
              <Icon icon="ph:twitch-logo-fill"  height="45" />
            </List.Item>
            <List.Item as="a" href="https://www.instagram.com/devflorez/" target="_blank" rel="noreferrer">
              <Icon
                icon="ant-design:instagram-filled"
          
                height="45"
              />
            </List.Item>

            <List.Item as="a" href="https://www.youtube.com/channel/UCF2L-W6Aj8mFv9AWExakICw" target="_blank" rel="noreferrer">
              <Icon icon="akar-icons:youtube-fill" height="45" />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
}
