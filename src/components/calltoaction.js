import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function App() {
  return (
    <Box style={{ margin: "15px auto" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Dive centre name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Something Number"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Something Number"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{
                margin: "25px auto",
                color: "white",
                backgroundColor: "orange",
              }}
            >
              Confirm Vist?
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item>
            <Typography variant="h5">
              Join the family and add your dive centre
            </Typography>

            <Typography variant="subtitle1">
              To become a part of a fast growing family
            </Typography>

            <Typography variant="subtitle1">
              Free submission and registration + 10% discount off our trading
              fees for 2 years
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
