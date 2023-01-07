import {Box, Stack, Typography } from '@mui/material'
import ContactBanner from "../component/contact"

export default function Footer() {
    return (  
    <div>
        
        <Box bgcolor="#424242" color="white"
         minHeight={{xs:"58px", sm:"93px", md:"9.72vh"}} 
         width="100%" 
      >
            <Stack 
               
               textAlign="center"
               pt={{xs:"5px", sm:"31px", md:"3.26vw"}}
               rowGap={{ xs: "28px", sm: "43px", md: "57px" }}
               columnGap={{ xs: "28px", sm: "43px", md: "57px" }}
               justifyContent="center"
               flexWrap="wrap"
               direction={{xs: "column", md: "row"}}
              >
                <Box spacing={3}>
                  <Stack direction="column" spacing={3} alignItems="flex-start">
                <Typography>Invetex</Typography>
                <Stack alignItems="flex-start" spacing={2}>
                  <Stack textAlign={"left"}>
                <Typography>
Perspiciatis unde omnis iste natus sit voluptat<br />
em accusantium doloremque laudantium<br />
totam rem aperiam, eaque ipsa quae.</Typography>
</Stack>
<Typography>
Los Angeles, Street Avenue, La 2540</Typography>
<Typography>
Phone: 800-123-4567</Typography>
<Typography>
Email: invetex@yoursite.com</Typography>
</Stack>
</Stack>
                </Box>
                <Box>

                <Typography>Recent Posts</Typography>
               
                </Box>
                <Box spacing={3}>
               <Box pr={{ xs: "25px", sm: "39pxs", md: "120px" }}>
                <Typography>Contact Form</Typography>
                </Box>
                <Stack direction="column" spacing={3}
              >
<ContactBanner />
               
                </Stack>
               
                </Box>  
               

       
            </Stack>
<Typography mt={10} textAlign="center">© 2022 invetex
</Typography>
        </Box>
    </div>
    );
}

