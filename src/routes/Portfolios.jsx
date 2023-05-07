import { Grid, Typography, Container } from "@mui/material";
import Portfolio from "../components/Portfolio";
import { skills } from "../const/skillSet";

function Portfolios() {
  const items = skills.map((skill) => skill.projects ?? skill.projects).flat();
  console.log(items);

  return (
    <div>
      <Grid container spacing={3} sx={{ marginTop: "1px" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            variant="h4"
            fontStyle={"italic"}
            align="center"
            gutterBottom
          >
            Portfolios
          </Typography>
        </Grid>
        <Grid item sx={{ margin: "0 auto", textAlign: "center" }}>
          <Container>
            {items.map((item, i) => (
              <Portfolio
                key={i}
                url={item.repository}
                image={item.image}
                sx={{ marginBottom: "3px" }}
              />
            ))}
          </Container>
        </Grid>
      </Grid>
      <Typography variant="h6" fontStyle={"italic"} align="center" gutterBottom>
        More coming soon...
      </Typography>
    </div>
  );
}

export default Portfolios;
