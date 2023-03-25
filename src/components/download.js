import { Button, Grid, Typography } from "@mui/material";

function Download() {
  return (
    <div className="App">
      <Grid container style={{ margin: "150px auto" }}>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} style={{ textAlign: "left" }}>
            <Typography variant="h5">
              Download and share your experience
            </Typography>
            <Typography variant="subtitle1">
              Download our app and and share your experience
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button></Button>
          </Grid>
          <Grid item xs={12}>
            <Button></Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={6}>
            <img alt="phone front"></img>
          </Grid>
          <Grid item xs={12} md={6}>
            <img alt="phone back"></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Download;
