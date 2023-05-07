import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} sx={{ background: "#9DD6CE" }}>
        <Typography
          fontFamily={"Roboto"}
          fontStyle={"italic"}
          align="center"
          color={"white"}
          gutterBottom
        >
          ©︎ Takao Mizuno 2022
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
