import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, mobileStepperClasses } from '@mui/material'
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import Logo from "../../images/logo.svg";

const Header = () => {
  const [MobileOpen,setMobileOpen] = useState(false)

//handel drawer function
 const handelDrawerToggel = () => {
    setMobileOpen(!MobileOpen)
 }
  //menu drawer
  const drawer =(
    <Box onClick={handelDrawerToggel} sx={{textAlign:'center'}}>
    <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1, my:2}}>
         <img src={Logo} alt='logo' height={"70"} width="200"></img>
        </Typography>
       
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"black"}}>
       <Toolbar>
        <IconButton color="inherit" aria-label='open drawer' edge="start" sx={{mr:2, display:{sm:'none'}}} onClick={handelDrawerToggel}>
          <p>Open</p>
        </IconButton>

        <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
        <img src={Logo} alt='logo' height={"70"} width="200"></img>
        </Typography>
        <Box sx={{display:{xs:"none",sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </Box>
       </Toolbar>

      </AppBar>
      <Box component="nav">
         <Drawer variant='temporary' open={MobileOpen} onClose={handelDrawerToggel} sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper":{boxSizing:"border-box",width:"240px"}}}>
{
  drawer
}
         </Drawer>
      </Box>
      <Box>
      <Toolbar></Toolbar>

      </Box>
    </Box>
    </>
  )
}

export default Header