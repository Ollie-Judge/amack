import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  IconButton,
  Rating,
  Box,
} from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Reviews() {
  return (
    <Box style={{ marginBottom: "25px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{
              width: "25%",
              display: "inline-block",
              margin: "auto 25px",
            }}
          >
            <CardContent>
              <Grid item>
                <IconButton>
                  <IconButton>
                    <QuestionMarkIcon />
                  </IconButton>
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>

          <Card
            style={{
              width: "25%",
              display: "inline-block",
              margin: "auto 25px",
            }}
          >
            <CardContent>
              <Grid item>
                <IconButton>
                  <IconButton>
                    <QuestionMarkIcon />
                  </IconButton>
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>

          <Card
            style={{
              width: "25%",
              display: "inline-block",
              margin: "auto 25px",
            }}
          >
            <CardContent>
              <Grid item>
                <IconButton>
                  <QuestionMarkIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reviews;
