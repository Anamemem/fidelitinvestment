import { Grid, Box, Typography, Stack, Card, TextField, Button   } from "@mui/material";
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


export default function Refferals() {
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
    <Link href="/user">

<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "400", color: "#616161"}}

variant="h5" >Dashboard</Typography>
    </Link>
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

  <Link href="/user/refferals">
<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Refferals</Typography>
 </Link>
    </Stack>

    <Stack spacing={1}  mt={3} px={2} direction="row">
      <Box style={{color: "#616161"}}>
  <FolderSpecialIcon />
      </Box>
      <Link href="/user/account">

<Typography 
        style={{fontFamily: "Quicksand", fontWeight: "500", color: "#616161"}}

 >Accounts</Typography>
 </Link>
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
  

<Stack justifyContent="center"
  alignItems="center"
  spacing={2} 
  direction="column">
    <Typography textAlign="center" fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "black",fontFamily: "Quicksand"
              }}
              > 
               Number of refferals</Typography>



               <Box style={{ height: "100px", backgroundColor: "white"}} width={{xs: "80%", md: "50%"}}>
               <Typography textAlign="center" justifyContent="center">0</Typography>

               </Box>
    
               <Typography textAlign="center" fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "black",fontFamily: "Quicksand"
              }}
              > 
               Refferal ID</Typography>

               <Box style={{ height: "100px", backgroundColor: "white"}} width={{xs: "80%", md: "50%"}}>
              
               </Box>
    
   
   
  

      
  </Stack>

 
                

  </Grid>
  </Grid>
    </>
    
    )
}