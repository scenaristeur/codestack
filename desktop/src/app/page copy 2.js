"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack";
import { data } from "../data.js";
console.log(data);
import Link from "next/link";

import HeroBlock from "../components/heroBlock.js";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent.js";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = [
  {
    id: "0",
    title: "HOME",
    link: "/",
  },
  {
    id: "1",
    title: "SURF",
    link: "/surf",
  },
  {
    id: "2",
    title: "CODE",
    link: "/code",
  },
  {
    id: "3",
    title: "YOGA",
    link: "/yoga",
  },
  // {
  // id: "4",
  // title: "KIKWAOU",
  // link:"#",
  // links: [
  //   {
  //     id: "41",
  //     title: "Autres Activités",
  //     link: "/autres",
  //   },
  //   {
  //     id: "42",
  //     title: "L'équipe",
  //     link: "/équipe",
  //   },
  //   {
  //     id: "43",
  //     title: "Les Landes",
  //     link: "/landes",
  //   },
  //   {
  //     id: "44",
  //     title: "Cuisine",
  //     link: "/cuisine",
  //   }

  // ]
  // },
  {
    id: "5",
    title: "TARIFS",
    link: "/tarifs",
  },
  {
    id: "6",
    title: "BLOG",
    link: "/blog",
  },
  {
    id: "7",
    title: "CONTACT",
    link: "/contact",
  },

  //   "HOME",
  //   "SURF",
  //   "CODE",
  //   "YOGA",
  //  // "KIKWAOU",
  //   "TARIFS",
  //   "BLOG",
  //   "CONTACT",
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Code And Surf
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={navItem.title} /> */}
              <Link href={navItem.link}>{navItem.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
          <div height="400"> SECOND bandeau</div>
          <Stack direction="row" spacing={2}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image="/img/tube.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CE que nous proposons
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
                image="/img/tube.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CE que nos client disent
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
            {data.SURF_BLOCKS.map((hero) => (
              <HeroBlock key={hero.id.toString()} value={hero} />
            ))}
          </Stack>
          <WhatMakesUsDifferent blocks={data.WHAT_MAKES_US_DIFFERENT} />
          prix stack 2
        </Box>
      </Container>
    </Box>
  );
}
