import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import '../styles/Skill.css'


function Skill(props) {
    const { skill } = props;
    return (        
        <Box>
            <Card sx={{ display: 'flex', justifyContent: 'center', height: '12rem'}}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography className='language-underline' component="h2" variant="h5" align='left'>
                        <span>
                            {skill.language}
                        </span>
                    </Typography>

                    <Typography variant="subtitle1" align='left' paragraph>
                        {skill.description}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 150, display: { sm: 'block' } }}
                    image={skill.image}
                    alt={skill.imageLabel}
                />
            </Card>
        </Box>
    )
}

Skill.propTypes = {
    skill: PropTypes.shape({
        language: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageLabel: PropTypes.string.isRequired
    })
};

export default Skill;