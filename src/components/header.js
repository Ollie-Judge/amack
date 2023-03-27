import { Typography, Button, Grid } from "@mui/material";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";

function Header() {
  return (
    <div className="App">
      <Grid container alignItems="center">
        <Grid item xs={12} style={{ position: "absolute", zIndex: "1" }}>
          <video loop autoPlay muted style={{ width: "100%" }}>
            <source src={background} type="video/mp4" />
          </video>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            margin: "150px auto",
            textAlign: "center",
            zIndex: "2",
          }}
        >
          <Typography variant="h2" style={{ color: "white" }}>
            Amack
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            margin: "auto",
            textAlign: "center",
            zIndex: "2",
          }}
        >
          <Typography variant="subtitle1">Currently: Egypt only</Typography>
          <Typography variant="h5">The easiest way to dive</Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              width: "50%",
            }}
          >
            We are a new scuba trips booking application, that enables you to
            find & compare different dive sites in Egypt, Pick your desired dive
            centre & book your next dive trips!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            style={{ borderRadius: "25px", margin: "250px" }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
