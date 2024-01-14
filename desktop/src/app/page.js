"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack";
import { data } from "../data.js";
console.log(data);

import HeroBlock from "../components/heroBlock.js";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent.js";

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Container>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/img/surf.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Un environnement exceptionnel pour surfer et coder lors d’un
                séjour haut niveau
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Decouvrez nos cours, nos session, les lieux et l’équipe dans les
                LANDES
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>

          <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image="/img/tube.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ce que nous proposons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: "50%" }}>
              <CardMedia
                component="img"
                height="140"
                image="/img/surf.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ce que nos client disent
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Stack>
          <Stack spacing={2}>
            {data.LANDING_BLOCKS.map((block) => (
              <HeroBlock key={block.id.toString()} value={block} />
            ))}
          </Stack>
          <WhatMakesUsDifferent blocks={data.WHAT_MAKES_US_DIFFERENT} />
          prix stack 2
        </Box>
      </Container>
    </Box>
  );
}
