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
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid item>
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
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="This is a review"
                    variant="outlined"
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
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
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="This is a review"
                    variant="outlined"
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
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
                <Grid item>
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
      </Grid>
    </Box>
  );
}

export default Reviews;
