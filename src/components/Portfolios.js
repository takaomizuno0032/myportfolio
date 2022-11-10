import * as React from 'react';
import { Box, Grid, Typography, Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import LineIcon from '../static/img/linebot.png';
import ResizeIcon from '../static/img/resize.jpg';
import DiscordIcon from '../static/img/discord.png';
import Portfolio from './Portfolio';

function _onClick(event) {
    console.log("hoge");

}

function _addClass(event) {

}



function Portfolios() {
    const portfolio1 = {
        image: LineIcon,
        url: 'https://github.com/takaomizuno0032/LineBot',
    }

    const portfolio2 = {
        image: ResizeIcon,
        url: 'https://github.com/takaomizuno0032/Resize_Photo',
    }

    const portfolio3 = {
        image: DiscordIcon,
        url: 'https://github.com/takaomizuno0032/Discord-Bot-2.0',
    }

    const items = [portfolio1, portfolio2, portfolio3];
    const state = {
        showFullscreenButton: false,

    }



    return (
        <Grid container spacing={3} sx={{ marginTop: '1px' }}>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#9DD6CE' }}>
                <Typography variant='h4' fontFamily={'Roboto'} fontStyle={'italic'} align='center' color={'white'} gutterBottom >
                    Portfolios
                </Typography>
            </Grid>
            <Grid item sx={{ margin: '0 auto' }}>
                <Container >
                    {
                        items.map((item, i) => (
                            <Portfolio key={i} url={item.url} image={item.image} sx={{ marginBottom: '3px' }} />
                        ))}
                </Container>
            </Grid>



        </Grid >
    );
}


export default Portfolios;