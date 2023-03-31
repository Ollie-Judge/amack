import "../style/footer.css";
import { Grid, Link, TextField, Typography, Button, Box } from "@mui/material";
import background from "../resources/f504eafe9917f0b39a40932f7e548813.mp4";

function Footer() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} style={{ position: "absolute", zIndex: "1" }}>
          <video
            loop
            autoPlay
            muted
            style={{
              width: "100%",
              opacity: "0.9",
              borderTopLeftRadius: "50% 40px",
              borderTopRightRadius: "50% 40px",
            }}
          >
            <source src={background} type="video/mp4" />
          </video>
        </Grid>
        <div
          item
          xs={12}
          style={{
            position: "absolute",
            Color: "blue",
            opacity: "0.5",
            zIndex: "3",
            borderTopLeftRadius: "50% 40px",
            borderTopRightRadius: "50% 40px",
          }}
        ></div>
        <Grid item xs={12} md={4} style={{ zIndex: "2", paddingTop: "150px" }}>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Contact us
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              About us/Our Vision
            </Link>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="filled"
              style={{ backgroundColor: "white" }}
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
        <Grid item xs={12} md={4} style={{ zIndex: "2", paddingTop: "150px" }}>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Privacy
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Terms and Conditions
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Product: The Red Sea
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} style={{ zIndex: "2", paddingTop: "150px" }}>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Join the family
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Add your centre
            </Link>
          </Grid>
          <Grid item xs={12} className="footerLinkSpacing">
            <Link href="#Contact" className="footerItem">
              Download
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ zIndex: "2" }}>
          <Typography variant="h6" className="footerItem">
            Pick, Plan, Book.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ zIndex: "2" }}>
          <Typography variant="h6" className="footerItem">
            Your Dives
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
