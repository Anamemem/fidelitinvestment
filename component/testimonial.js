import {Stack,  Grid, Typography, Box } from '@mui/material';
import Avatar from '../public/Avatar.jpg';
import Image from 'next/image'
import React from 'react';


export default function Testimonial() {
    return(
<>


<Stack
  direction={{xs: "column"}}
  justifyContent="center"
  alignItems="center"
  mt={20}>
    
    <Typography  textAlign="center" variant='h4'>Testimonials</Typography>

    <Typography textAlign="center"> 
     Testimonials from customers who are satisfied 
     with services that have been effectively<br />
used in marketing for as long as marketing exists.</Typography>


  </Stack>
  <Stack
  direction={{xs: "column", md: "row"}}
  justifyContent="center"
  alignItems="center"
  mt={10}
  spacing={10}>


<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src={Avatar} width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack>

    <Typography mt={2} textAlign="center"> Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.<br />
Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.</Typography>
<Typography textAlign="center" mt={5}>Chris Doe</Typography>

</Box>
<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src={Avatar} width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack>

    <Typography mt={2} textAlign="center"> Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.<br />
Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.</Typography>
<Typography textAlign="center" mt={5}>Chris Doe</Typography>

</Box>
<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src={Avatar} width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack>

    <Typography mt={2} textAlign="center"> Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.<br />
Testimonials from customers who are satisfied <br />
     with services that have been effectively<br />
used in marketing for as long as marketing exists.</Typography>
<Typography textAlign="center" mt={5}>Chris Doe</Typography>

</Box>  </Stack>
</>


    )
}