import * as React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import SelfPic from '../static/img/selfpic.jpg';

// The component of profile part.
function Profile() {

    // go to top position when page transition.
    const topScroll = () => {
        window.scrollTo(0, 0);
    }

    return (<Grid container spacing={2} sx={{ marginTop: '1px' }}>
        <Grid item xs={12} md={12} lg={12} sx={{ backgroundColor: 'custom.main' }}>
            <Typography variant='h4' align='center' fontFamily={'Roboto'} fontStyle={'italic'} color={'white'} gutterBottom >
                Profile
            </Typography>
        </Grid>
        <Container sx={{ margin: '0 auto' }}>
            <Typography sx={{ display: 'inline-block' }}>My name is </Typography>
            <Typography fontStyle={'italic'} sx={{ display: 'inline-block' }}>Takao Mizuno.</Typography>
            <Typography sx={{ marginBottom: '10px' }}>I am a software engineer and Master of IT student in Australia.</Typography>
            <Typography>↓ more detail ↓</Typography>
            <RouterLink to="personal" onClick={topScroll}>
                <Avatar
                    className='self-picture'
                    alt="Takao"
                    src={SelfPic}
                    sx={{
                        display: 'inline-block',
                        minWidth: 300,
                        minHeight: 300
                    }}
                >
                </Avatar>
            </RouterLink>
        </Container>
    </Grid>);
}

export default Profile;