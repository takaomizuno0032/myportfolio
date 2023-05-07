import { Typography, Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { heroDetail } from '../const/heroDetail';
import '../styles/Hero.css'

function Hero() {
  const detail = heroDetail
  
  return (
    <Container disableGutters maxWidth="false" className='hero-container'>
      <div role="img" className="hero-image" aria-label="hero image" />
      <div className='hero-text'>
        <Typography variant="h2">{detail.name}</Typography>
        <TypeAnimation
          sequence={[
            1300,
            detail.description,
            1000,
            detail.language,
            1000,
            'and more...',
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </Container>
  );
}

export default Hero;