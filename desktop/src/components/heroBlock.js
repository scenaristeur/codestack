import Grid from "@mui/material/Grid"; // Grid version 1

export default function HeroBlock(props) {
  return (

    
    //     <Stack direction="row" spacing={2}>

    // {props.value.id%2 == 0 &&         <h1>{props.value.title}</h1>    }

    //       <img
    //         src="https://i.imgur.com/MK3eW3Am.jpg"
    //         width="200"
    //         alt="Katherine Johnson"
    //       />

    //     {props.value.id%2 == 1 &&         <h1>{props.value.title}</h1>    }
    //     </Stack>

    // <div>

    // </div>

    <Grid container spacing={2}>
      {props.value.id % 2 == 1 && (
        <Grid xs={6}>
          <h3>{props.value.title}</h3>
          <div>{props.value.text}</div>
        </Grid>
      )}

      <Grid xs={6}>
        
        <img
          src={props.value.imageSource}
          width="100%"
          alt="Katherine Johnson"
        />
      </Grid>

      {props.value.id % 2 == 0 && (
        <Grid xs={6}>
          <h3>{props.value.title}</h3>
          <div>{props.value.text}</div>
        </Grid>
      )}
    </Grid>
  );
}
