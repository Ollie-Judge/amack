import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography variant="h5">Contact & feedback</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              We need your opinions to serve you better, let us know of any
              feature you ... and we will be ready to add it! if you have any
              equiries we would love to hear from you.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Phone number</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">+123456789</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Contact email</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">qwerty@qwerty.com</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
