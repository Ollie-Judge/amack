import { Button, Grid, Link, Typography } from "@mui/material";

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
                style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              ></img>
            </Link>
          </Grid>
          <Grid item xs={12}>
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
                style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              ></img>
            </Link>
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
