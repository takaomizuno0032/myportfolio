import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PersonalPicture from "../static/img/selfpic.jpg";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";
import SurfingIcon from "@mui/icons-material/Surfing";

function Personal() {
  return (
    <div>
      <Typography
        variant="h3"
        fontStyle={"italic"}
        align="left"
        sx={{ margin: "10px" }}
      >
        My introduction
      </Typography>
      <Grid container spacing={5}>
        <Grid item md={5} lg={5}>
          {/* to display when bigger than md size. */}
          <Avatar
            alt="small-self-picture"
            src={PersonalPicture}
            sx={{
              transparent: 0.5,
              minHeight: "400px",
              minWidth: "400px",
              display: { xs: "none", md: "flex" },
              margin: "30px",
            }}
          ></Avatar>

          <Avatar
            alt="small-self-picture"
            src={PersonalPicture}
            sx={{
              minWidth: 300,
              minHeight: 300,
              display: { xs: "flex", md: "none" },
              margin: "10px",
            }}
          />
        </Grid>
        {/* Description of introduction */}
        <Grid item sx={{ margin: "10px" }}>
          <Typography
            variant="h5"
            align="left"
            sx={{ textDecoration: "underline" }}
          >
            I am a Master of IT student at QUT. My major is Computer Science.
          </Typography>
          <Typography align="left">
            I have three years experience working as an IT engineer in Japan.{" "}
          </Typography>
          <Typography align="left">
            I can motivate my colleague, create new function and communicate
            smoothly with all stakeholders.
          </Typography>
          <Typography align="left">
            Seeking the environment that friendly and enhance each other.
          </Typography>
          <Typography align="left">
            I am interested in Blockchain and learning this skill to create web3
            apps.
          </Typography>

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Experiences" />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="Blockchain Engineer"
                secondary="2022.12 ~ "
              />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="Software Engineer at a data security company"
                secondary="2020.04 ~ 2022.06"
              />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="Web Engineer at a web company"
                secondary="2019.05 ~ 2020.02"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="Queensland University of Technology in Australia"
                secondary="2022.07.25 ~"
              />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="University of Tokyo in Japan"
                secondary="2014.04.01 ~ 2020.03.31"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SurfingIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Hobby" />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText
                primary="Lacrosse"
                secondary="2015.04.01 ~ now. I belong to a local lacrosse team in Brisbane."
              />
            </ListItem>
            <ListItem sx={{ pl: 5 }}>
              <ListItemText primary="Surfin" secondary="I want to try!!" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
