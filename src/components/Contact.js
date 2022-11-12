import * as React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import LinkedInIcon from '../static/img/linkedin.png';
import FacebookIcon from '../static/img/facebook.png';
import QiitaIcon from '../static/img/qiita.png';
import InstaIcon from '../static/img/instagram.png';
import ContactElement from './ContactElement';


function Contact() {

    const linkedIn = {
        url: "https://www.linkedin.com/in/takao-mizuno-776a04231/",
        image: LinkedInIcon
    }

    const facebook = {
        url: "https://www.facebook.com/takao.mizino",
        image: FacebookIcon
    }

    const qiita = {
        url: "https://qiita.com/mizutakawater/",
        image: QiitaIcon
    }

    const instagram = {
        url: "https://instagram.com/waterbrisbane?igshid=YmMyMTA2M2Y=",
        image: InstaIcon
    }

    const contacts = [linkedIn, facebook, qiita, instagram];


    return (
        <Grid container spacing={2} sx={{ marginTop: '1px' }}>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#9DD6CE' }}>
                <Typography variant='h4' align='center' fontFamily={'Roboto'} fontStyle={'italic'} color={'white'} gutterBottom >
                    Contact
                </Typography>
            </Grid>
            <Grid item sx={{ margin: '0 auto' }}>
                <Container >
                    {
                        contacts.map((element, i) => (
                            <ContactElement key={i} url={element.url} image={element.image} sx={{ marginBottom: '3px' }} />
                        ))}
                </Container>
            </Grid>

        </Grid >
    );
}

export default Contact;