import { Grid, Typography } from "@mui/material";

function Slogan() {
  return (
    <div className="App">
      <Grid container style={{ margin: "100px auto" }}>
        <Grid item xs={12} md={6}>
          <Typography>Elevate your diving experience</Typography>
          <Typography>
            we are elevating your dive experience by reducing .... dives,
            helping you find the .... dive centre to your needs and give you
            access to our forwards system, resulting in a .....
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt="diving gear"
            src="src/resources/red-diving-storage-box-01-04867-3eKGs.png"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Slogan;
