import "../style/footer.css";
import { Grid, Link, TextField, Typography, Button } from "@mui/material";

function Footer() {
  return (
    <div className="App">
      <Grid container style={{ margin: "50px auto" }}>
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} className="footerItem">
          <Typography variant="h6">Pick, Plan, Book.</Typography>
        </Grid>
        <Grid item xs={12} className="footerItem">
          <Typography variant="h6">Your Dives</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
