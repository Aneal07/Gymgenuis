import React from 'react';
import {Box, Stack ,Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercise = ( { targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs:'0'}}}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, mt: '70px' }} fontWeight={700} color="#000" mb="33px">Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? 
         <HorizontalScrollBar data={targetMuscleExercises}/>
        : <Loader/>}
      </Stack>
      
    </Box>
  );
}

export default SimilarExercise;
