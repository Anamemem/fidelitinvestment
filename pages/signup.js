import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Typography, Button, InputAdornment, Box, Alert, } from '@mui/material'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link'
import ElevationScroll from "../component/minAppbar"


export default function Register() {
    return ( <>
    <ElevationScroll />
    <Box px={{xs:"16px",md:0}} sx={{backgroundColor:"#424242"}} height="100vh">
      <Grid container mt={{md:"3.33vw"}}>
       <Grid item xs={12} md={12} mt={{xs:"12.00vw", md:"4.17vw"}} sx={{ mx: "auto", textAlign: "center" }}>
       <Typography variant='h4'
              sx={{
                fontWeight: 700,
                // fontSize: "30px",
                // lineHeight: "42px",
                color: "white",
                marginBottom: {md:"1.39vw"}
              }}
            >
              INVETEX
            </Typography>
            <Stack width={"100%"} maxWidth={{   md: "32.22vw" }} mx="auto" 
          spacing={{xs:"6.00vw", md:"0.08vw"}} sx={{ mt:{xs:"4.00vw", md:"1.39vw"}, }}>
             <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="User name(login)" id="fullWidth" style={{borderRadius: 5}}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="E-mail" id="fullWidth" />
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Password" id="fullWidth" />
                </Box>
                 <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Confirm Password" id="fullWidth" />
                </Box>
                <Box alignItems="center" justifyContent="center"
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                    <Button variant="contained"  sx={{ display: { xs: 'block', sm: 'block' }, backgroundColor: "#52b202", borderRadius: 5 }}>Registeration</Button>
                </Box>

            </Stack>
       </Grid>
      </Grid>
    </Box>

    </> );
}

