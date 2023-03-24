import { Card, Grid, Typography } from "@mui/material";

function Banner() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Experience booking differently</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">
            We Gather the .... Dive site & centre
          </Typography>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src="../resources/choose.png" alt="pick dive sites"></img>
            <Typography>Pick Preffered Dive Sites</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src="src/resources/snorkel-gear.png" alt="snorkel gear"></img>
            <Typography>Equipment</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src="src/resources/calendar (1).png" alt="Calendar"></img>
            <Typography>Available full period</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src="src/resources/skill.png" alt="skill"></img>
            <Typography>Either .... and </Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;
