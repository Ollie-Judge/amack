import { Box, Grid } from "@mui/material";
import front from "../resources/mobile amack1.png";
import back from "../resources/mobile amack.png";

function PhoneImage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6} style={{ zIndex: "2" }}>
          <img
            src={front}
            alt="phone front"
            style={{
              position: "relative",
              width: "10em",
              height: "auto",
              zIndex: "4",
            }}
          ></img>
          <img
            src={back}
            alt="phone back"
            style={{
              position: "relative",
              width: "10em",
              height: "auto",
              left: "-50%",
              top: "-40%",
              zIndex: "3",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PhoneImage;
