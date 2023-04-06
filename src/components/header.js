import { Typography, Button, Grid, Box, CardMedia } from "@mui/material";
import "../style/header.css";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";
import "../resources/FindetNemo-KVxD.ttf";

function Header() {
  return (
    <Box
      style={{
        textAlign: "center",
        height: "auto",
      }}
    >
      <CardMedia
        component="video"
        autoPlay
        muted
        loop
        image={background}
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "1",
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
        }}
      />
      <Grid container style={{ top: "0" }}>
        <Grid
          item
          xs={12}
          style={{
            margin: "150px auto",
            zIndex: "2",
          }}
        >
          <Typography
            variant="h2"
            style={{
              color: "white",
            }}
          >
            Amack
          </Typography>
        </Grid>

        <Grid
          item
          style={{
            zIndex: "2",
            paddingLeft: "35%",
            marginBottom: "50px",
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
