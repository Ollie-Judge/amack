import { Typography, Button, Grid, Box, CardMedia } from "@mui/material";
import "../style/header.css";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";

function Header() {
  return (
    <Box
      style={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardMedia
        component="video"
        autoPlay
        muted
        loop
        image={background}
        style={{
          zIndex: "1",
          borderBottomLeftRadius: "40% 30px",
          borderBottomRightRadius: "40% 30px",
        }}
      />
      <Grid container style={{ top: "0", position: "absolute" }}>
        <Grid
          item
          xs={12}
          style={{
            margin: "150px auto",
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
            zIndex: "2",
            align: "center",
            margin: "auto",
          }}
        >
          <Typography variant="subtitle1" className="headerText">
            Currently: Egypt only
          </Typography>
          <Typography variant="h4" className="headerText">
            The easiest way to dive
          </Typography>
          <Typography
            variant="body1"
            className="headerText"
            style={{
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
            style={{
              borderRadius: "25px",
              zIndex: "2",
              textAlign: "center",
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
