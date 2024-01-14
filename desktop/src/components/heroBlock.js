import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function HeroBlock(props) {
  return (
    <Grid container spacing={2}>
      {props.value.id % 2 == 0 && (
        <Grid xs={6} item={true}>
          <img
            src={`../img/${props.value.imageSource}`}
            alt={props.value.title}
            width={"100%"}
          ></img>
        </Grid>
      )}

      <Grid xs={6} item={true}>
        <div
          style={{
            padding: "30px",
          }}
        >
          <img
            src={`../img/${props.value.logoSource}`}
            alt={props.value.title}
            width="50px"
          ></img>

          <h3>{props.value.title}</h3>
          <div
            style={{
              padding: "10px 0px 40px 0px",
            }}
          >
            {props.value.text}
          </div>

          <Button href="{props.value.link}" variant="outlined">
            Book now
          </Button>
        </div>
      </Grid>

      {props.value.id % 2 == 1 && (
        <Grid xs={6} item={true}>
          <img
            src={`../img/${props.value.imageSource}`}
            alt={props.value.title}
            width={"100%"}
          ></img>
        </Grid>
      )}
    </Grid>
  );
}
