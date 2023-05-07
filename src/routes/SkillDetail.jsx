import { useParams } from "react-router-dom";
import { skills } from "../const/skillSet";
import { Typography, Grid } from "@mui/material";
import SkillDetailCard from "../components/SkillDetailCard";
import SkillInfo from "../components/SkillInfo";

function SkillDetail() {
  const { id } = useParams();
  const skill = skills.find((skill) => skill.id.toString() === id);

  return (
    <div>
      <Grid container sx={{ marginTop: "1px", paddingLeft: "5px" }} spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h4" fontStyle={"italic"} gutterBottom>
            Detail of {skill.technique}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontStyle={"italic"} gutterBottom>
            Skill Information
          </Typography>
        </Grid>
        <Grid item lg={5}>
          <SkillInfo skillInfo={skill} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" fontStyle={"italic"} gutterBottom>
            Portfolios
          </Typography>
        </Grid>
        {skill.projects.length > 0 ? (
          skill.projects.map((project, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{ marginBottom: "5px" }}
            >
              <SkillDetailCard project={project} />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography variant="h6">No available. Coming soon.</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default SkillDetail;
