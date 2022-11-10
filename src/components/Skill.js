import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

function Skill(props) {
    const { skill } = props;
    return (

        <Grid item xs={12} md={12} lg={12}>
            <Box>
                <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" align='left' sx={{ textDecoration: 'underline' }}>
                            {skill.language}
                        </Typography>

                        <Typography variant="subtitle1" align='left' paragraph>
                            {skill.description}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: 100, display: { sm: 'block' } }}
                        image={skill.image}
                        alt={skill.imageLabel}
                    />
                </Card>

            </Box>

        </Grid>

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