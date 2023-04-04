import { Box, Card, Grid, Typography } from "@mui/material";
import choose from "../resources/choose.png";
import snorkel from "../resources/snorkel-gear.png";
import calendar from "../resources/calendar (1).png";
import skill from "../resources/skill.png";

function Banner() {
  return (
    <Box
      xs={12}
      style={{
        zindex: "5",
        width: "100%",
        marginBottom: "25px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Experience booking differently</Typography>
          <Typography variant="subtitle1">
            We Gather the .... Dive site & centre
          </Typography>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img
              src={choose}
              alt="pick dive sites"
              style={{ width: "25%", margin: "auto 25px" }}
            ></img>
            <Typography>Pick Preffered Dive Sites</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img
              src={snorkel}
              alt="snorkel gear"
              style={{ width: "25%" }}
            ></img>
            <Typography>Equipment</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src={calendar} alt="Calendar" style={{ width: "25%" }}></img>
            <Typography>Available full period</Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Card>
            <img src={skill} alt="skill" style={{ width: "25%" }}></img>
            <Typography>Either .... and </Typography>
            <Typography>
              the text is too small to read but theres some text here
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
