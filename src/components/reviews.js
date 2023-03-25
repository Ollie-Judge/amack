import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  IconButton,
  Rating,
} from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Reviews() {
  return (
    <div className="App">
      <Grid container style={{ margin: "200px auto" }}>
        <Grid item xs={12}>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid xs={2} style={{ margin: "25px auto" }}>
          <Card>
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
                  label="Name of reviewer"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="This is a review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2} style={{ margin: "25px auto" }}>
          <Card>
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
                  label="Name of reviewer"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="This is a review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={2} style={{ margin: "25px auto" }}>
          <Card>
            <CardContent>
              <Grid item>
                <IconButton>
                  <QuestionMarkIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Name of reviewer"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="This is a review"
                  variant="outlined"
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Reviews;
