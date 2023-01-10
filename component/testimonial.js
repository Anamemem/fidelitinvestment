import {Stack,  Grid, Typography, Box } from '@mui/material';
import Avatar from '../public/Avatar.jpg';
import Image from 'next/image'
import React from 'react';
import Link from "next/link"


export default function Testimonial() {
    return(
<>


<Stack
  direction={{xs: "column"}}
  justifyContent="center"
  alignItems="center"
  mt={20}>
    
    <Typography  textAlign="center" variant='h4' sx={{fontFamily: "Quicksand"}}>OUR PRODUCTS AND FEATURES</Typography>
  </Stack>
  <Stack
  direction={{xs: "column", md: "row"}}
  justifyContent="center"
  alignItems="center"
  mt={10}
  spacing={5}>

<Link href="/signup">

<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src="/productImg3.jpg" width={300} height={300}  alt="" />
  </Stack>



</Box>
</Link>
<Link href="/signup">
<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src="/productImg2.jpg" width={300} height={300}  alt="" />
  </Stack>



</Box>
</Link>
<Link href="/signup">
<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src="/productImg5.jpg" width={300} height={300}  alt="" />
  </Stack>



</Box>
</Link>
<Link href="/signup">
<Box>  
    <Stack justifyContent="center"
  alignItems="center">

    <Image src="/productimg1.jpg" width={300} height={300}  alt="" />
  </Stack>



</Box>
</Link></Stack>
</>


    )
}