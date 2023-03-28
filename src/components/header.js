import { Typography, Button, Grid } from "@mui/material";
import "../style/header.css";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";

function Header() {
  return (
    <div className="App">
      <Grid container alignItems="center">
        <video
          loop
          autoPlay
          muted
          style={{
            position: "absolute",
            zIndex: "1",
            width: "100%",
            borderBottomLeftRadius: "40% 30px",
            borderBottomRightRadius: "40% 30px",
          }}
        >
          <source src={background} type="video/mp4" />
        </video>
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
            align: "center",
            margin: "auto",
            zIndex: "2",
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
              textAlign: "center",
              zIndex: "2",
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
