import * as React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import LineIcon from '../static/img/linebot.png';
import ResizeIcon from '../static/img/resize.jpg';
import FsxIcon from '../static/img/fsx.jpg';

function Experiences() {
    const experience1 = {
        original: LineIcon,
        thumbnail: LineIcon,
        embedUrl: 'https://github.com/takaomizuno0032/LineBot',
        description: 'This script can remind me the date when I should pay my rent. Coded by python.',
        originalHeight: '400px'
    }

    const experience2 = {
        original: ResizeIcon,
        thumbnail: ResizeIcon,
        description: 'This script can change photo size. Coded by python. It is useful when the size of photos should be unified.',
        originalHeight: '400px'
    }

    const experience3 = {
        original: FsxIcon,
        thumbnail: FsxIcon,
        description: 'I created the function that collect log data from AWS FSx service when I worked at a security software company. Coded by C#.',
        originalHeight: '400px'
    }

    const images = [experience1, experience2, experience3];
    const state = {
        showFullscreenButton: false
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12} sx={{ background: 'black' }}>
                <Typography variant='h4' align='center' color={'white'} gutterBottom >
                    Experiences
                </Typography>
            </Grid>
            {/* {portfolios.map((p, i) => (
                <Portfolio id={i} skill={p} sx={{ marginBottom: '3px' }} />
            ))} */}
            <Grid item xs={12} md={12} lg={12}>

                <ImageGallery items={images} showFullscreenButton={state.showFullscreenButton} style={{ opacity: 0.5 }} />

            </Grid>

        </Grid>
    );
}


export default Experiences;