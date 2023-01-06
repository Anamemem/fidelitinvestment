import {Box, Stack, Typography } from '@mui/material'


export default function Footer() {
    return (  
    <div>
        
        <Box bgcolor="#000000" color="white"
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
                <Box>

                <Typography></Typography>
                <Typography>Image
Perspiciatis unde omnis iste natus sit voluptat<br />
em accusantium doloremque laudantium<br />
totam rem aperiam, eaque ipsa quae.</Typography>
                </Box>
                <Box>

                <Typography>Recent Posts</Typography>
               
                </Box>
                <Box >

                <Typography>Contact Form</Typography>
                <Stack direction="column" spacing={5}
              >

               
                </Stack>
               
                </Box>
               

       
            </Stack>
<Typography mt={10} textAlign="center">© 2022 invetex
</Typography>
        </Box>
    </div>
    );
}

