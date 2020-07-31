import React from 'react';
import Navbar from '../components/navbar/index';
import './styles.scss';
import LazyHero from 'react-lazy-hero';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typist from 'react-typist';

const HomePage = () => {
  return (
    <div className='page'>
      <Navbar />
      <div>
        <LazyHero
          imageSrc='./innovation.jpg'
          minHeight='100vh'
          parallaxOffset={100}
          opacity={0.4}
          color='#000080'
        >
          <Typography variant='h1' color='secondary'>
            Matthew Marberry
          </Typography>
          <Typography variant='h5' color='secondary'>
            Building reliable solutions for real-world problems.
          </Typography>
        </LazyHero>
      </div>
      <div className='section'>
        <div className='left60'>
          <Typography variant='h5'>Welcome to my website</Typography>
        </div>
        <div className='right40 blueBg'>
          <img src='./portfolioPicture.jpg' className='img blueOverlay' />
        </div>
      </div>
      <Typist cursor={{ show: false }}>
        <Typography variant='h3' cur>
          Welcome to my little react website
        </Typography>
        <Typography variant='h3'>Thank you for visiting</Typography>
      </Typist>
      <div className='flexContainer'>
        <div className='blueBg'>
          <h1>Second container</h1>
        </div>
      </div>

      <Grid item xs={12} className='fullWidth'>
        <Grid
          container
          justify='space-between'
          alignContent='flex-start'
          alignItems='flex-start'
        >
          <Grid item className='width60'>
            <Paper color='secondary'>
              <Typography variant='h1'>First container</Typography>
            </Paper>
          </Grid>
          <Grid item className='width40'>
            <div className='blueBg'>
              <Typography variant='h1'>Second container</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
