import React from 'react'
import { Box , Stack , Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg:"212px", 
        xs:"70px", 
        ml:"50px"}
    }} position="relative" p="20px">
        <Typography color="#ec7a0f"
        fontWeight="600" fontSize="26px">
        Workout Central
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: {lg:"44px", xs:"40px"}}}
        mb="23px" mt="30px">
            Push, Laugh <br/>and Do It Over
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" mb={4}>
            Explore highly-effective workouts.
        </Typography>
        <Button variant="contained"
        color="error" href="#exercises"
        sx={{backgroundColor: "#ec7a0f", padding: "10px"}}> Explore Exercises</Button>
        <Typography
        fontWeight={600}
        color="#ec7a0f"
        sx={{
            opacity: 0.1,
            display: {lg:'block', xs: 'none'}
        }}
        fontSize="200px">
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
  )
}

export default HeroBanner