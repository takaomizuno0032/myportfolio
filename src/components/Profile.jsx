import * as React from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import SelfPic from '../static/img/selfpic.jpg';

// The component of profile part.
function Profile() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/myportfolio/personal')
    }

    return (
        <Grid container spacing={2} sx={{ marginTop: '1px', textAlign: 'center' }}>
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
                <Button onClick={onClick}>
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
                </Button>
            </Container>
        </Grid>);
}

export default Profile;