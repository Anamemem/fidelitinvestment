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


export default function UserDashboard() {
    return ( 
    <>
  
    <Grid container  height={{xs: "100vh", md: "100vh"}} >
   
    <Grid item xs={2} >
     <PersistentDrawerLeft />
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
  

<Stack justifyContent="center"
  alignItems="center"
  spacing={2} 
  direction="column">
    <Typography textAlign="center" fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "black",fontFamily: "Quicksand"
              }}
              > 
              Withdraw Earnings</Typography>
    
   
    
    <TextField sx={{ width: "70%",  backgroundColor: " #D9D9D9" }} label="Email"  />
    <TextField sx={{ width: "70%",  backgroundColor: " #D9D9D9" }} label="Your name"  />
    <TextField sx={{ width: "70%",  backgroundColor: " #D9D9D9" }} label="Enter your deposit wallet address"  />
    

      
  </Stack>

  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  mt={5}
><Button s sx={{ fontSize: { sm: "14px", md: "25px" } }}
                variant="contained">Confirm</Button>
                </Stack>
                

  </Grid>
  </Grid>
    </>
    
    )
}