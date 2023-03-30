import { Box, Grid } from "@mui/material";
import fish from "../resources/f504eafe9917f0b39a40932f7e548813.mp4";

function FishCentre() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <video loop autoPlay muted style={{ width: "100%" }}>
            <source src={fish} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FishCentre;
