import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Avatar } from '@mui/material';


function Portfolio(props) {
    return (
        <Typography component='a' href={props.url} target='_blank' sx={{ display: 'inline-block', margin: '10px' }}>
            <Avatar className='icon-hover' src={props.image} variant="rounded" sx={{
                width: '200px',
                height: '200px'
            }}>

            </Avatar>
        </Typography>
    );
}

Portfolio.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Portfolio;