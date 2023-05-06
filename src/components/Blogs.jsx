import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Blog from './Blog';




function Blogs() {
    return (
        <Grid container spacing={2} sx={{ marginTop: '1px' }}>
            <Grid item xs={12} md={12} lg={12} sx={{ backgroundColor: 'custom.main' }}>
                <Typography variant='h4' align='center' fontFamily={'Roboto'} fontStyle={'italic'} color={'white'} gutterBottom >
                    Blog
                </Typography>
            </Grid>
            <Blog />

        </Grid>
    )
}

export default Blogs;