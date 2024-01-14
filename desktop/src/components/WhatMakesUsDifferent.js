import Grid from "@mui/material/Grid";
export default function HeroBlock(props) {
  return (
    <div>
      <h1>What makes us different</h1>

      <Grid container spacing={2}>
        {props.blocks.map((block) => (
          <Grid xs={3} item={true} key={block.id}>
            <div
              style={{
                padding: "30px",
              }}
            >
              <h3>{block.title}</h3>
              <div
                style={{
                  padding: "10px 0px 40px 0px",
                }}
              >
                {block.text}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
