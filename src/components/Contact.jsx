import { Typography, Grid, Container } from "@mui/material";
import ContactElement from "./ContactElement";
import { contacts } from "../const/contact";

function Contact() {
  return (
    <Grid container spacing={2} sx={{ marginTop: "1px" }}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: "custom.main" }}
      >
        <Typography
          variant="h4"
          align="center"
          fontFamily={"Roboto"}
          fontStyle={"italic"}
          color={"white"}
          gutterBottom
        >
          Contact
        </Typography>
      </Grid>
      <Grid item sx={{ margin: "0 auto", textAlign: "center" }}>
        <Container>
          {contacts.map((element, i) => (
            <ContactElement
              key={i}
              url={element.url}
              image={element.image}
              sx={{ marginBottom: "3px" }}
            />
          ))}
        </Container>
      </Grid>
    </Grid>
  );
}

export default Contact;
