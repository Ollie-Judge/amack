import { Grid, Link, Typography, Box } from "@mui/material";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";
import PhoneImage from "./image";

function Download() {
  return (
    <Box style={{ zIndex: "4" }}>
      <Grid container>
        <Grid item xs={12} style={{ position: "absolute", zIndex: "1" }}>
          <video
            loop
            autoPlay
            muted
            style={{
              width: "100%",
            }}
          >
            <source src={background} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={12} md={6} style={{ zIndex: "2", padding: "5em" }}>
          <Grid
            item
            xs={12}
            style={{ textAlign: "left", marginBottom: "25px" }}
          >
            <Typography variant="h5" style={{ color: "white" }}>
              Download and share your experience
            </Typography>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Download our app and and share your experience
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ zIndex: "2", textAlign: "left" }}>
            <Link
              href="https://apps.apple.com/us/app/google/id284815942?itsct=apps_box_badge&amp;itscg=30200"
              style={{
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "13px",
                width: "250px",
                height: "83px",
              }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1549929600"
                alt="Download on the App Store"
                style={{
                  borderRadius: "13px",
                  width: "250px",
                  height: "83px",
                }}
              ></img>
            </Link>
          </Grid>
          <Grid item xs={12} style={{ zIndex: "2", textAlign: "left" }}>
            <Link
              href="https://play.google.com/store/apps?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              style={{
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "13px",
                width: "250px",
                height: "83px",
              }}
            >
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                style={{
                  borderRadius: "13px",
                  width: "250px",
                  height: "83px",
                }}
              ></img>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ zIndex: "2", paddingTop: "6em", paddingLeft: "6em" }}
        >
          <PhoneImage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Download;
