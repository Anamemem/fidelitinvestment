import { Grid, Box, Typography, Stack, Card, TextField  } from "@mui/material";
import PersistentDrawerLeft from "../../component/user/drawer"
import SalesChart from "../../component/user/chart"
// import Topbar from "../../component/user/topbar"
// import Header from "../../component/user/header"
// import Avatar from '@mui/material/Avatar';
// import Link from "next/link"
// import FcBarChart from "react-icons/fc"
import Image from 'next/image'
import Link from 'next/link'
// import CabinIcon from '@mui/icons-material/Cabin';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ApprovalIcon from '@mui/icons-material/Approval';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ForwardIcon from '@mui/icons-material/Forward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


// import {Box,Stack,Button} from '@mui/material';

// import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { CardActionArea } from '@mui/material';


export default function UserDashboard() {
    return ( 
    <>
  <Box sx={{display: {xs: "block", md: "none"} }}>
      <PersistentDrawerLeft />
      </Box>
    <Grid container  height={{xs: "100vh", md: "100vh"}} >
   
  <Grid item xs={2} sx={{display: {xs: "none", md: "block"} }} >
     <Stack spacing={0}  mt={-5} px={1} direction="row">
    <Image src="/logoImg.jpg" width={200} height={200} alt="logo" />
      </Stack>
  <Box pt={2} sx={{display: {xs: "none", md: "block"} }}
  >
    <Stack spacing={1} px={2} direction="row">
    
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "400", color: "#616161"}}

variant="h5" >Dashboard</Typography>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">

      <Box style={{color: "#616161"}}>
  <AddToPhotosIcon />
      </Box>
      <Link href="/user/invest">
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Invest</Typography>
      </Link>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <ApprovalIcon />
      </Box>
      <Link href="/user/withdraw">
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Withdraw</Typography>
 </Link>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <ApartmentIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Loan/incentives</Typography>
    </Stack>
    
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <FamilyRestroomIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Refferals</Typography>
    </Stack>

    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <FolderSpecialIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Accounts</Typography>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <ForwardIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Logout</Typography>
    </Stack>

    </Box>
  </Grid>
  <Grid item   xs={12} md={10} style={{backgroundColor: "#e0e0e0"}} 
  >

   <Stack direction={{xs: "column", md: "row"}} px={5} mt={5} spacing={50}>
      <Typography style={{fontFamily: "Quicksand"}} fontSize="25px">Welcome James Blessing!</Typography>
   </Stack>
      <Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  pr={10}
  mt={-5}
>

   <AccountCircleIcon />
</Stack>
  <Stack direction={{xs: "column", md: "row"}}
      
      sx={{margin: "40px 0px"}}
      flexWrap={"wrap"}
      width="100%"
      pl={5}
      spacing={2}>
         <Box maxWidth={{xs:"141px", sm:"226px", md:"18.54vw"}} width="100%"> 

<Card  elevation={0}

 sx={{    minWidth: 205 }} width="100%">
    <CardContent>
       <Stack direction="row" spacing={{xs:"13px", sm:"21px", md:"2.15vw"}}>
       <Stack direction="column">
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
           Total Amount
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
44,278
   </Typography>
   
   </Stack>
   {/* <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  <FcBarChart />
   </Box> */}
   </Stack>
   </CardContent>

</Card>
      </Box>

      <Box maxWidth={{xs:"141px", sm:"226px", md:"18.54vw"}} width="100%"> 

<Card  elevation={0}

 sx={{    minWidth: 205 }} width="100%">
    <CardContent>
       <Stack direction="row" spacing={{xs:"13px", sm:"21px", md:"2.15vw"}}>
       <Stack direction="column">
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
        Amount Invested
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$67,987
   </Typography>
  
   </Stack>
   <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  
   </Box>
   </Stack>
   </CardContent>

</Card>
      </Box>

      <Box maxWidth={{xs:"141px", sm:"226px", md:"18.54vw"}} width="100%"> 

<Card  elevation={0}

 sx={{    minWidth: 205 }} width="100%">
    <CardContent>
       <Stack direction="row" spacing={{xs:"13px", sm:"21px", md:"2.15vw"}}>
       <Stack direction="column">
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
           Total Profit
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$76,965
   </Typography>
  
   </Stack>
   <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  
   </Box>
   </Stack>
   </CardContent>

</Card>
      </Box>

      <Box maxWidth={{xs:"141px", sm:"226px", md:"18.54vw"}} width="100%"> 

<Card  elevation={0}

 sx={{    minWidth: 205 }} width="100%">
    <CardContent>
       <Stack direction="row" spacing={{xs:"13px", sm:"21px", md:"2.15vw"}}>
       <Stack direction="column">
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
     Refferal Amount
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$59,765
   </Typography>
  
   </Stack>
   <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  
   </Box>
   </Stack>
   </CardContent>

</Card>
      </Box>



               </Stack>

   <Grid container >
    <Grid item xs={12}  px={5}>
        <Box  style={{backgroundColor: "white"}} height="70vh" >
            <SalesChart />

        </Box>
    </Grid>
   

   </Grid>
   
  </Grid>
  </Grid>
    </>
    
    )
}