import { Grid } from "@mui/material";
import fish from "../resources/f504eafe9917f0b39a40932f7e548813.mp4";

function FishRight() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <video loop autoPlay muted style={{ width: "100%", zindex: "1" }}>
            <source src={fish} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </div>
  );
}

export default FishRight;
