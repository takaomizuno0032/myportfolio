import * as React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { Typography, Avatar } from '@mui/material';



function ContactElement(props) {

    return (
        <Typography component='a' href={props.url} target='_blank' sx={{ display: 'inline-block', margin: '10px' }}>
            <Avatar className='icon-hover' src={props.image} variant="rounded" sx={{
                width: '100px',
                height: '100px'
            }}>

            </Avatar>
        </Typography>
    );
}


ContactElement.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};


export default ContactElement;