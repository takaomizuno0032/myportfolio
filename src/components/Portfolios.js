import * as React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import LineIcon from '../static/img/linebot.png';
import ResizeIcon from '../static/img/resize.jpg';
import DiscordIcon from '../static/img/discord.png';
import KeyboardIcon from '../static/img/keyboard.png';
import Portfolio from './Portfolio';

// this component of portfolios part.
function Portfolios() {
    // todo.
    // these data should be fetched from database..
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

    const portfolio4 = {
        image: KeyboardIcon,
        url: 'https://github.com/takaomizuno0032/keyboardcommerce',
    }

    const items = [portfolio1, portfolio2, portfolio3, portfolio4];

    return (
        <Grid container spacing={3} sx={{ marginTop: '1px' }}>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#9DD6CE' }}>
                <Typography variant='h4' fontFamily={'Roboto'} fontStyle={'italic'} align='center' color={'white'} gutterBottom >
                    Portfolios
                </Typography>
            </Grid>
            <Grid item sx={{ margin: '0 auto', textAlign: 'center' }}>
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