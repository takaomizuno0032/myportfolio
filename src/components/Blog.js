import * as React from 'react';
import { Grid, Typography, Box, Avatar } from '@mui/material';
import { Container } from '@mui/system';
import BlogIcon from '../static/img/blog.png';

function Blog() {
    return (
        <React.Fragment>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' sx={{ marginTop: 3 }}>
                            This is my blog.
                        </Typography>
                        <Typography>
                            I store my knowledge and experiences in this blog.
                        </Typography>
                        <Typography>
                            This site is created by React/Next.js.
                        </Typography>
                        <Typography>
                            Please enjoy my blog and learn programming!
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography component='a' href={'https://knowledge-database.vercel.app/'} target='_blank' sx={{ display: 'inline-block', margin: '10px' }}>
                            <Avatar className='icon-hover' src={BlogIcon} variant="rounded" sx={{
                                width: '400px',
                                height: '200px'
                            }}>

                            </Avatar>
                        </Typography>
                    </Grid>
                </Grid>

            </Container>

        </React.Fragment>
    )
}

export default Blog;