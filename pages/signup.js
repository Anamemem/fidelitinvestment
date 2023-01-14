import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Typography, Button, Box,  } from '@mui/material'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link'
import ElevationScroll from "../component/minAppbar"
import MultipleSelectCheckmarks from "../component/dropdown"
import { useAuthContex } from "../context/auth";
import { useRouter } from "next/router";
import Validator from "validatorjs";


export default function Register() {
   const router = useRouter();
   const [loading, setLoading] = useState(false)
   const [data, setData] = useState("");
   const [error, setError] = useState("");
   const { signUp } = useAuthContex()


 function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
   
  }


  let userinfo = {
   firstname: data.fullname,
   lastname: data.lastname,
   email: data.email,
   password: data.password,
   confirmpassword: data.confirmpassword,
   country:data.country,
   phone:data.phone,
   username:data.username,
 };

 let rule = {
   firstname: "required",
   lastname: "required",
   email: "required|email",
   password: "min:4",
   confirmpassword: "min:4",
   country: "required",
   phone: "required",
   username: "required"
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   setLoading(true);
   let validation = new Validator(userinfo, rule);
   if (validation.passes()) {
     signUp(data)
       .then((res) => {
         handleClick()
         setSuccess(res.data.msg)
         router.push('/login')
         setLoading(0);
         console.log(data)
       })
       .catch((e) => {
         setError(e.message)
         setLoading(0);
       }).finally(() => {
         setLoading(0);
       });
   }
   else {
     setError(validation.errors.errors?.email || validation.errors.errors?.password || validation.errors.errors?.fullname);
     setLoading(false);
   }


 }

 

    return ( <>
    <ElevationScroll />
    <Box px={{xs:"16px",md:0}}  height="100%">
      <Grid container mt={{md:"3.33vw"}}>
       <Grid item xs={12} md={12} mt={{xs:"12.00vw", md:"4.17vw"}} sx={{ mx: "auto", textAlign: "center" }}>
       <Typography variant='h4'
              sx={{
                fontWeight: 700,
                // fontSize: "30px",
                // lineHeight: "42px",
                color: "black",
                marginBottom: {md:"1.39vw"}
              }}
            >
              Sterling assests
            </Typography>
            <Stack width={"100%"} maxWidth={{   md: "32.22vw" }} mx="auto" 
          spacing={{xs:"6.00vw", md:"0.08vw"}} sx={{ mt:{xs:"4.00vw", md:"1.39vw"}, }}>
             <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="First Name" id="fullWidth" style={{borderRadius: 5}}
                     disableUnderline
                     name="firstname"
                     error={error?.firstname?.length}
                     helperText={error?.firstname?.[0]}
                     value={data.firstname}
                     onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Last Name" id="fullWidth" style={{borderRadius: 5}}
                     disableUnderline
                     name="lastname"
                     error={error?.lastname?.length}
                     helperText={error?.lastname?.[0]}
                     value={data.lastname}
                     onChange={handleChange}/>
                </Box>
             <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="User name(login)" id="fullWidth" style={{borderRadius: 5}}
                     disableUnderline
                     name="username"
                     error={error?.username?.length}
                     helperText={error?.username?.[0]}
                     value={data.username}
                     onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="E-mail" id="fullWidth" 
                      error={error?.email?.length}
                      helperText={error?.email?.[0]}
                      name="email"
                      type="email"
                      disableUnderline
                      value={data.email}
                      onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Password" id="fullWidth" 
                      error={error?.password?.length}
                      helperText={error?.password?.[0]}
                      name="password"
                      disableUnderline
                      type="password"
                      value={data.password}
                      onChange={handleChange}/>
                </Box>
                 <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Confirm Password" id="fullWidth" 
                      error={error?.confirmpassword?.length}
                      helperText={error?.confirmpassword?.[0]}
                      name="confirmpassword"
                      disableUnderline
                      type="password"
                      value={data.confirmpassword}
                      onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Phone Number" id="fullWidth" style={{borderRadius: 5}}
                    disableUnderline
                    name="username"
                    error={error?.phone?.length}
                    helperText={error?.phone?.[0]}
                    value={data.phone}
                    onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"3.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <MultipleSelectCheckmarks 
                     error={error?.country?.length}
                     helperText={error?.country?.[0]}
                     name="country"
                     disableUnderline
                     value={data.country}
                     onChange={handleChange}/>
                </Box>
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "2.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Referral code" id="fullWidth" style={{borderRadius: 5}}/>
                </Box>
                <Box alignItems="center" justifyContent="center"
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                  <Stack alignItems="center" justifyContent="center" >
                  { loading ? <Button className="text-center"> <CircularProgress color="primary" /></Button> : <Button onClick={handleSubmit} variant="contained"  sx={{ display: { xs: 'block', sm: 'block' }, backgroundColor: "#52b202", borderRadius: 5, px: 10 }}>Registeration</Button>}
                    </Stack>
                </Box>

            </Stack>
       </Grid>
      </Grid>
    </Box>

    </> );
}

