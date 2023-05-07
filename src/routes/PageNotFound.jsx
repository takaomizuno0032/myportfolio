import { Typography, Paper, Box, Grid } from "@mui/material";
import NotFoundPage from "../static/img/notfound.jpg";

function PageNotFound() {
  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${NotFoundPage})`,
        transparent: 0.5,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid
        container
        sx={{
          height: "250px",
          top: "50%",
          marginTop: "-125px",
          position: "absolute",
        }}
      >
        <Grid item xs={12} mg={12} lg={12}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{ fontFamily: "Robot" }}
            >
              Sorry...
            </Typography>
            <a href="https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602785.htm#query=404&position=6&from_view=keyword">
              Image by storyset
            </a>
            <Typography>on Freepik</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PageNotFound;
