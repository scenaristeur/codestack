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
import { data } from "@/data.js";
console.log(data);
import Link from "next/link";

import HeroBlock from "@/components/heroBlock.js";

export default function SurfPage(props) {
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
                SURF CAMP - LES LANDES - Moliets et Maa
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
          <Stack spacing={2}>
            {data.CODE_BLOCKS.map((hero) => (
              <HeroBlock key={hero.id.toString()} value={hero} />
            ))}
          </Stack>
          prix stack 2
        </Box>
      </Container>
    </Box>
  );
}
