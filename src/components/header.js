import { Typography, Button, Grid } from "@mui/material";

function Header() {
  return (
    <div className="App">
      <Grid container alignItems="center">
        <video loop autoPlay>
          <source
            src="public/resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4"
            type="video/mp4"
          />
        </video>

        <Grid item xs={12}>
          <Typography variant="h2">Amack</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Currently: Egypt only</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">The easiest way to dive</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ margin: "auto", width: "50%" }}>
            We are a new scuba trips booking application, that enables you to
            find & compare different dive sites in Egypt, Pick your desired dive
            centre & book your next dive trips!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" style={{ borderRadius: "25px" }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
