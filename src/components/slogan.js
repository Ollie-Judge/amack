import { Grid, Typography } from "@mui/material";
import gear from "../resources/red-diving-storage-box-01-04867-3eKGs.png";

function Slogan() {
  return (
    <div className="App">
      <Grid container style={{ margin: "100px auto" }}>
        <Grid item xs={12} md={5}>
          <Typography variant="h6">Elevate your diving experience</Typography>
          <Typography variant="subtitle1">
            we are elevating your dive experience by reducing .... dives,
            helping you find the .... dive centre to your needs and give you
            access to our forwards system, resulting in a .....
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt="diving gear"
            src={gear}
            style={{ width: "100%", zindex: "2" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Slogan;
