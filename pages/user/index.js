import { Grid, Box, Typography, Stack, Card  } from "@mui/material";
import PersistentDrawerLeft from "../../component/user/drawer"
import SalesChart from "../../component/user/chart"
import Topbar from "../../component/user/topbar"
// import Header from "../../component/user/header"
import Avatar from '@mui/material/Avatar';
import Link from "next/link"
import FcBarChart from "react-icons/fc"
import Image from 'next/image'
import CabinIcon from '@mui/icons-material/Cabin';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ApprovalIcon from '@mui/icons-material/Approval';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ForwardIcon from '@mui/icons-material/Forward';


// import {Box,Stack,Button} from '@mui/material';

// import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


export default function UserDashboard() {
    return ( 
    <>
    <Stack direction={{xs: "column", md: "row"}}
   
    alignItems="center"
    spacing={2}>
      
    </Stack>
    <Grid container  height={{xs: "100vh", md: "100vh"}} >
   
  <Grid item xs={2} >
     <PersistentDrawerLeft />
  <Box pt={10} sx={{display: {xs: "none", md: "block"} }}
  >
    <Stack spacing={1} px={2} direction="row">
    
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

variant="h4" >Dashboard</Typography>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <AddToPhotosIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Invest</Typography>
    </Stack>
    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <ApprovalIcon />
      </Box>
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Withdraw</Typography>
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
  <Grid item   xs={10} style={{backgroundColor: "#e0e0e0"}} 
  >

   <Stack direction={{xs: "column", md: "row"}} style={{backgroundColor: "#81d4fa"}}>
shfjjfj
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
           Total users
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
44,278
   </Typography>
   <Typography >
<span style={{color: "#2979ff"}}>5%</span> lastweek
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
           Total Profit
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$67,987
   </Typography>
   <Typography  >
<span style={{color: "#d500f9"}}>0.75%</span>Last 6 days
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
           Total Expenses
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$76,965
   </Typography>
   <Typography  >
<span style={{color: "#76ff03"}}>0.9%</span>Last 9 days
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
           Total cost
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
$59,765
   </Typography>
   <Typography  >
<span style={{color: "#ff9800"}}>0.6% </span>Last Year
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
    <Grid item xs={12} md={8} px={5}>
        <Box width="100%" style={{backgroundColor: "white"}} height="70vh" >
            <SalesChart />

        </Box>
    </Grid>
    <Grid item xs={12} md={4}>
    <Box   height="70vh" >
            
    <Image src="/Gold.png" width={400} height={500} alt="heroImage"   />
            </Box>

    </Grid>

   </Grid>
   
  </Grid>
  </Grid>
    </>
    
    )
}