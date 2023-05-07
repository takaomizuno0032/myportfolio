import { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import Skill from "../components/Skill";
import { skills } from "../const/skillSet";

function Skills() {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: "1px" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h4" fontStyle={"italic"} gutterBottom>
            Skills
          </Typography>
        </Grid>

        {skills.map((skill, i) => (
          <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: "3px" }} key={i}>
            <Skill skill={skill} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        sx={{ marginLeft: "5px" }}
        onClick={handleClick}
        className="custom-button"
      >
        Show Other skills
      </Button>
      {showList && (
        <ul>
          <li>AWS</li>
          <ul>
            <li>EC2</li>
            <li>CloudFormation</li>
            <li>QLDB</li>
            <li>DynamoDB</li>
            <li>etc.</li>
          </ul>
          <li>Database</li>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>MongoDB</li>
            <li>etc.</li>
          </ul>
          <li>Container</li>
          <ul>
            <li>Containerd</li>
            <li>Docker</li>
            <li>etc.</li>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default Skills;
