import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {StoreList} from '../data/storedata'

const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap',m:2}}>
      {
       StoreList.map(store =>(
          <Card sx={{m:'20px',width:'calc(33% - 40px)',bgcolor:'red'}}>
            <CardActionArea>
              <CardContent sx={{textAlign:'center', m:'25px',}}>
                <Typography variant='h5' gutterBottomcomponent={'div'}>
                  {
                    store.name
                  }
                </Typography>
                <Typography variant='h5' gutterBottom >
                  {
                    store.address
                  }
                </Typography>
                <Typography variant='p' gutterBottom >
                  {
                    store.Country
                  }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }

    </Box>
    </Layout>
  )
}

export default Menu