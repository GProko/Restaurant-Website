import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Form, Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'
import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'


const Home = () => {
  const [open, openchange] = useState(false);
  const functionopenpopup = ()=>{
     openchange(true);
  }
  const closepopup = ()=>{
    openchange(false);
 }
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
<div className='headerContainer'>
  <h1>Food Website</h1>
  <p>Best food in India</p>
 
 <button onClick={functionopenpopup}>Order Now</button>
 {/* modal */}
 <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
  <DialogTitle><IconButton style={{float:'right'}}><CloseIcon color='primary' onClick={()=>{
  closepopup()
 }}></CloseIcon></IconButton>
  <div> <h2 className='Form_title'>Form Enquriy</h2></div> 
  </DialogTitle>
 <DialogContent>
  <div className='form_div'>
 <form>
  <div className='csform_row'>
  <div className='csform_col_8'>
  <label>Username</label><br></br>
  <input type='text' placeholder='jhon wat'></input>
  </div>
  <div className='csform_col_4'>
  <label>Mobile</label><br></br>
  <input type='phone' placeholder='+1'></input>
  </div>
  </div>
  <div className='csform_row'>
  <div className='csform_col_8'>
  <label>Username</label><br></br>
  <input type='email' placeholder='example@gmail.com'></input>
  </div>
  <div className='csform_col_4'>
  <label for="cars">Location:</label><br></br>
  <select name="location" id="location" value={"category"}>
  <option value="volvo">Mumbai</option>
  <option value="saab">Canada</option>
  <option value="mercedes">Kolkata</option>
  </select>
  </div>
  </div>
  <div className='csform_row'>
    <div className='csform_col_8'>
    <label for="cars">Select Service</label><br></br>
  <select name="location" id="location" value={"category"}>
  <option value="volvo">Service One</option>
  <option value="saab">Service Two</option>
  <option value="mercedes">Service Three</option>
  </select> 
    </div>
    <div className='csform_col_4'>
    <label for="birthday">Date:</label><br></br>
    <input type="date" id="date" name="date"></input>
    </div>  
  </div>
  <div className='csform_row'>
  <input type="submit"></input>
  </div>
 </form>
 </div>
 </DialogContent>
 {/* <Button onClick={()=>{
  closepopup()
 }} color="error" variant="contained">close</Button> */}
 </Dialog>
 {/* modal end */}
 
</div>
    </div>

    </Layout>
  )
}

export default Home