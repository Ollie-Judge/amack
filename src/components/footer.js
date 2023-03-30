import "../style/footer.css";
import { Grid, Link, TextField, Typography, Button, Box } from "@mui/material";
import background from "../resources/4k-sea-waves-on-the-beautiful-aerial-view-drone-2021-10-21-17-22-57-utc_Slomoss.mp4";

function Footer() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} style={{ position: "absolute", zIndex: "1" }}>
          <video loop autoPlay muted style={{ width: "100%", opacity: "0.9" }}>
            <source src={background} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={12} md={4} style={{ zIndex: "2" }}>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Contact us</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Our Vision</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
            ></TextField>
            <Button
              variant="contained"
              style={{
                backgroundColor: "orange",
                color: "white",
                margin: "25px",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} style={{ zIndex: "2" }}>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Privacy</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Terms and Conditions</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Product: The Red Sea</Link>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} style={{ zIndex: "2" }}>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Join the family</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Add your centre</Link>
          </Grid>
          <Grid item xs={12} className="footerItem">
            <Link href="#Contact">Download</Link>
          </Grid>
        </Grid>
        <Grid item xs={12} className="footerItem" style={{ zIndex: "2" }}>
          <Typography variant="h6">Pick, Plan, Book.</Typography>
        </Grid>
        <Grid item xs={12} className="footerItem" style={{ zIndex: "2" }}>
          <Typography variant="h6">Your Dives</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
