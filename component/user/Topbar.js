import {Box,Stack,Button,Typography} from '@mui/material';

import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';



// const topBar ={
//     users: {
//         title: " total users",
//         total: "44,278",
//         percent: "5% last week ",
//     },
//     Profit: {
//         title: " total users",
//         total: "44,278",
//         percent: "5% last week ",
//     },
//     Expenses: {
//         title: " total users",
//         total: "44,278",
//         percent: "5% last week ",
//     },
//     cost: {
//         title: " total users",
//         total: "44,278",
//         percent: "5% last week ",
//     },


// }


export default function Topbar() {
    return(
<>
<Stack direction={{xs: "column", md: "row"}}
      
      sx={{margin: "40px 0px"}}
      flexWrap={"wrap"}
      width="100%"
      
      spacing={4}>

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
        <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
 <span>5% lastweek</span>
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
           asjJKX users
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
44,278
   </Typography>
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
<span>5% lastweek</span>
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
           asjJKX users
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
44,278
   </Typography>
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
<span>5% lastweek</span>
   </Typography>
   </Stack>
   <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  
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
           asjJKX users
   </Typography>
   <Typography  gutterBottom variant="h4" fontSize={{ xs:"14px", sm:"23px", md:"2.36vw" }} fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
44,278
   </Typography>
   <Typography  gutterBottom variant="h5"
    fontSize={{ xs:"15px", sm:"20px", md:"1.11vw" }} 
    fontWeight="400" lineHeight={{xs:"13px", sm:"20px", md:"2.08vw"}}>
<span>5% lastweek</span>
   </Typography>
   </Stack>
   <Box color="#2A569F" fontSize={{xs:"21px", sm:"33px", md:"3.47vw"}}>
  
   </Box>
   </Stack>
   </CardContent>

</Card>
      </Box>
   </Stack>
   </CardContent>

</Card>
      </Box>
      </Stack>

</>

    )
}