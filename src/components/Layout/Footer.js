import React from 'react'
import { Box, Typography } from '@mui/material'

const footer = () => {
  return (
    <>
   <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>

<Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:'1rem'}}}>
    All Right Reserved &copy; Prathmesh Gupta
</Typography>

   </Box>
    </>
  )
}

export default footer