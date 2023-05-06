import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import { Typography, Grid, Box, keyframes } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { personDetail } from '../const/personDetail';


// this component of top page part displaying my name.
// change the name into more understandble.
function Hero() {
    
    // animation of my name.
    const trackingInContract = keyframes`
        0% {
            letter-spacing: 1em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    `;
    const AutName = styled(Typography)(() => ({
        animation: `0.8s ${trackingInContract} 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`

    }));

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${personDetail.image})`,
                transparent: 0.5,
                minHeight: '100vh',
                textAlign: 'center'
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={personDetail.image} alt={personDetail.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />

            <Grid container sx={{
                height: '250px',
                top: '50%',
                marginTop: '-125px',
                position: 'absolute'
            }}>
                <Grid item xs={12} mg={12} lg={12}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <AutName component="h1" variant="h3" color="inherit" gutterBottom sx={{ fontFamily: 'Robot' }}>
                            {personDetail.title}
                        </AutName>
                        <TypeAnimation
                            sequence={[
                                1300,
                                personDetail.description,
                                1000,
                                personDetail.descriptionTwo,
                                1000,
                                ''
                            ]}
                            cursor={true}
                            repeat={Infinity}
                        />

                    </Box>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default Hero;