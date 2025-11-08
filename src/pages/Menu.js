import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../data/data'

const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {
        MenuList.map(menu =>(
          <Card sx={{m:'2',width:'calc(33% - 20px)'}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}></CardMedia>
              <CardContent>
                <Typography variant='h5' gutterBottomcomponent={'div'}>
                  {
                    menu.name
                  }
                </Typography>
                <Typography variant='boday2' gutterBottom >
                  {
                    menu.description
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