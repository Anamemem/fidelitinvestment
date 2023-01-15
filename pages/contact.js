import ElevationScroll from "../component/minAppbar";
import Footer2 from "../component/footer2";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import {  Stack, Typography, Box, TextField, Button  } from '@mui/material'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







export default function About() {
    return(
<>

<ElevationScroll />



<Stack
          px={{ xs: "4.80vw" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          mt={{xs: "10px"}}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
        >
          <Box pl={{md:"2.60vw"}} sx={{display: {xs: "none", md: "block"} }}
          maxWidth={{ md: "50.54vw" }}  width="100%">
            <Image src="/logo.png" alt="img" width={500} height={300} />
           
          </Box>
          <Box   maxWidth={{ md: "43.54vw" }}>
            <Typography  style={{fontFamily: "Rowdies", fontWeight: "500", color: "#002984"}} mt={10}
             fontSize={{xs:"38px", sm:"60px", md:"3.25vw"}} variant="h1">
        Contact With Us
            </Typography>

            <Typography mt={2}>
            If you have any questions or queries that are not answered on our
             website, please feel free to contact us. We will try to respond to you as soon as possible. Thank you so much.
            </Typography>
           
           

            <Stack
              direction={{xs: "column", md: "row"}}
              my={{ xs: "14px", sm: "22px", md: "2.29vw" }}
           spacing={{xs: "10px", md: "130px"}}
              flexWrap={"wrap"}
          
             
              
            >
              <TextField label="name" /> 
              <TextField label="lastname" /> 
             
              
            </Stack>

            <Stack direction="column" spacing={5}>
            <TextField label="lastname" /> 
              <textarea placeholder="message" style={{height: "200px", border: "1.8px solid lightgray", padding: "10px"}} ></textarea>

            </Stack>
            <Box mt={5}>

<Button sx={{backgroundColor: "#00251a", color: "white"}}>Send message</Button>
            </Box>
          </Box>
         
        </Stack>

        <Stack
  direction={{xs: "column", md: "row"}}
  justifyContent="center"
  alignItems="center"
  spacing={5}
  mx={{xs: "20px"}}
  mt={20}>
    
    <Box style={{backgroundColor: "#00251a",color: "white",  height: "200px"}} width={{xs: "100%", md: "350px"}}   pl={{xs: "80px"}} p={8}>
      <Typography style={{fontFamily: "Rowdies"}} textAlign="center">Phone Number</Typography>
      <Typography style={{fontFamily: "Quicksand"}} textAlign="center" mt={3}>+2348054337851</Typography>
    
    </Box>
    <Box style={{backgroundColor: "#00251a",color: "white", height: "200px"}} width={{xs: "100%", md: "350px"}} elevation={24} p={8}>
      <Typography style={{fontFamily: "Rowdies"}} textAlign="center">Email Address</Typography>
      <Typography style={{fontFamily: "Quicksand"}} textAlign="center" mt={3}>demo@example.com</Typography>
    
    </Box>
    <Box style={{backgroundColor: "#00251a",color: "white",  height: "200px"}} width={{xs: "100%", md: "350px"}} elevation={24} p={8}>
      <Typography style={{fontFamily: "Rowdies"}} textAlign="center">Office Address
</Typography>
      <Typography style={{fontFamily: "Quicksand"}} textAlign="center" mt={3}>3015 Suit pagla road, Singapore</Typography>
    
    </Box>
   

   


  </Stack>

 



<Footer2 />


</>



    )
}