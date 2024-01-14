import Stack from "@mui/material/Stack";

export default function HeroBlock(props) {
  return (
    <Stack direction="row" spacing={2}>

{props.value.id%2 == 0 &&         <h1>{props.value.title}</h1>    }


     
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        width="200"
        alt="Katherine Johnson"
      />

    {props.value.id%2 == 1 &&         <h1>{props.value.title}</h1>    }
    </Stack>


<div>

  
</div>
   
  );
}
