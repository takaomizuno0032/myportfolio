import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';


function Portfolio() {
    return (
        <Grid item xs mg={4} lg={4}>
            hoge
        </Grid>
    );
}

Portfolio.propTypes = {
    portfolio: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};


export default Portfolio;