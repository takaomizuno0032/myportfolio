import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import '../styles/SkillDetailCard.css'

function SkillDetailCard(props) {
  const project = props.project;
  
  return (
    <div>
      <Card className="skill-detail-card">
        <CardMedia
          className="skill-detail-card-media"
          image={project.image}
          title={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" component="a" href={project.repository} target="_blank" rel="noreferrer" className='skill-detail-card-text'>
            { project.repository ? "Repository URL" : 'Not Available' }
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  )

}

export default SkillDetailCard;