import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import Typed from 'react-typed';
import './CookingArt.css';
import { Box } from '@mui/system';
const CookingArt = () => {
  return (
    <div style={{ marginBottom: '40px', marginTop: '40px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="div">
          <Typed
            strings={['Why We Are Unique']}
            typeSpeed={250}
          />
        </Typography>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16} sm={8} md={8} lg={10}>
            <div>
              <div style={{ marginTop: '40px', marginLeft: '80px' }}>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://t4.ftcdn.net/jpg/03/46/49/47/360_F_346494768_YqqTZSrOztipflSarCNJPsD1mxnhOEfm.jpg"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={16} sm={8} md={8} lg={6}>
            <div data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" style={{ marginTop: '40px', marginLeft: '10px' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.pinimg.com/736x/48/9b/77/489b7796e9dfd7eef3195af852ec4444.jpg"
              />
              <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" style={{ marginTop: '20px', marginLeft: '20px' }}>
                <Typography paragraph>
                  We have fun but we don't mess around. You and your order is important to us. We will get your job done as quickly as possible.
                </Typography>
              </div>

            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CookingArt;