// in src/Dashboard.tsx
import { Card, CardContent, CardHeader } from "@mui/material";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export const Dashboard = () => (
  <Card>
    <CardHeader title="Bienvenue sur l'admin Code n'Surf" />
    <CardContent>
      l'interface de gestion des ...
      <br></br>
      <Link href={"/#/notes"} sx={{ textDecoration: "none" }}>
        Notes
        <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
      </Link>
      <br></br>
      <Link href={"/#/users"} sx={{ textDecoration: "none" }}>
        users
        <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
      </Link>
      <br></br>
      <Link href={"/#/posts"} sx={{ textDecoration: "none" }}>
        posts
        <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
      </Link>
    </CardContent>
  </Card>
);
