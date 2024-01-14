"use client";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Button} from "@mui/material";
import Divider from "@mui/material/Divider";


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";


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

export default function NavBar(props) {
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
      <div>
      <AppBar component="nav" color="info">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link href="/">Code and Surf</Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((navItem) => (
            <Button key={navItem.id} sx={{ color: "#fff" }}>
              <Link href={navItem.link}>{navItem.title}</Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
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
        </div>
    );
  } 
  