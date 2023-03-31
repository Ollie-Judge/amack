import { Box, Grid, Typography } from "@mui/material";
import gear from "../resources/red-diving-storage-box-01-04867-3eKGs.png";

function Slogan() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6} style={{ paddingTop: "8%" }}>
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
            style={{ width: "75%", zindex: "2" }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Slogan;
