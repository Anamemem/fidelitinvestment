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
    
    <Typography  textAlign="center" variant='h4'>OUR PRODUCTS AND FEATURES</Typography>
  </Stack>
  <Stack
  direction={{xs: "column", md: "row"}}
  justifyContent="center"
  alignItems="center"
  mt={10}
  spacing={10}>


<Box>  
    {/* <Stack justifyContent="center"
  alignItems="center">

    <Image src="/Avatar.jpg" width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack> */}
<Typography textAlign="center" >SILVER PLAN <br />$500.00-$5,999.00</Typography>
    <Typography mt={2} textAlign="left">*Minimumamount:$300.00<br />
     *Maximum amount:$5,999.00<br />
*ROI Model:5.5% Weekly Profit<br />
*Referral commission:10.00% <br />
on referred user first deposit only <br />
  *Personal account manager<br />
*Full access over your money</Typography>


</Box>
<Box>  
     {/* <Stack justifyContent="center"
  alignItems="center">

    <Image src="/Avatar.jpg" width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack> */}
<Typography textAlign="center" >GOLD PLAN <br />$6,000.00-$19,999.00</Typography>
    <Typography mt={2} textAlign="left">*Minimumamount:$6,000.00<br />
     *Maximum amount:$19,999.00<br />
*ROI Model:6.8% Weekly Profit<br />
*Referral commission:10.00% <br />
on referred user first deposit only <br />
  *Personal account manager<br />
*Full access over your money</Typography>
</Box>
<Box>  
    {/* <Stack justifyContent="center"
  alignItems="center">

    <Image src="/Avatar.jpg" width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack> */}
<Typography textAlign="center" >DIAMOND PLAN <br />$20,000.00-$50,000.00</Typography>
    <Typography mt={2} textAlign="left">*Minimumamount:$20,000.00<br />
     *Maximum amount:$50,000.00<br />
*ROI Model:7.2% Weekly Profit<br />
*Referral commission:10.00% <br />
on referred user first deposit only <br />
  *Personal account manager<br />
*Full access over your money</Typography>

</Box>  
<Box>  
    {/* <Stack justifyContent="center"
  alignItems="center">

    <Image src="/Avatar.jpg" width={100} height={100} style={{borderRadius: "50px"}} alt="" />
  </Stack> */}
<Typography textAlign="center" >PREMIUM <br />$60,000.00-$100,000.00</Typography>
    <Typography mt={2} textAlign="left">*Minimumamount:$60,000.00<br />
     *Maximum amount:$100,000.00<br />
*ROI Model:8.4% Weekly Profit<br />
*Referral commission:10.00% <br />
on referred user first deposit only <br />
  *Personal account manager<br />
*Full access over your money</Typography>

</Box>
</Stack>
</>


    )
}