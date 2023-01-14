import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Typography, Button, Box,  } from '@mui/material'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link'
import ElevationScroll from "../component/minAppbar"
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useAuthContex } from "../context/auth";
import { useRouter } from "next/router";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 25,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 25,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));


export default function SignIn() {
  const router = useRouter();
  const [data, setData] = useState({});
  const { login } = useAuthContex();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState(false);


  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    setLoading(true);
    // handleClick();
    SignIn(data)
      .then((res) => {
        //redirect to home page
        setSuccess(res.data.msg);
        router.push("/");
      })
      .catch((e) => {
        // display error to user
        setError(e.message);
        setLoading(0);
      })
      .finally(() => {
        setLoading(0);
      });
  };
    return ( <>
    <ElevationScroll />
    <Box px={{xs:"16px",md:0}}  height="100vh">
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
                     <TextField fullWidth label="Login or Email" id="fullWidth" style={{borderRadius: 5}}
                      name="email"
                      disableUnderline
                      onChange={handleValue}
                      // variant="standard"
                      type="email"/>
                </Box>
               
                <Box 
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                     <TextField fullWidth label="Password" id="fullWidth" 
                     name="password"
                    type={password ? "text" : "password"}
                    onChange={handleValue}/>
                </Box>
               
                <Box>
                  <Stack
                    direction={{ xs: "column", sm: "row", md: "row" }}
                    justifyContent={{
                      xs: "space-between",
                      sm: "space-between",
                      md: "space-between",
                    }}
                    sx={{ alignItems: { xs: "center" } }}
                    width={{ xs: "100%" }}
                    spacing={{ xs: "10px" }}
                  >
                    <Stack
                      direction="row"
                      alignItems={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                      }}
                    >
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      <Typography
                        ml={{ xs: "1.60vw", md: "0.56vw" }}
                        // className={styles.texts}
                        // variant="caption"
                        sx={{
                          fontWeight: { xs: "100" },
                        }}
                      >
                        Remember me
                      </Typography>
                    </Stack>

                    <Link href="/forgotpassword" marginLeft={{ md: "60px" }}>
                      <Typography
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Link>
                  </Stack>
                 
                </Box>
                <Box alignItems="center" justifyContent="center"
             py={{xs:"1.40vw", md:"1.04vw"}}
             px={{xs:"3.00vw", md:"1.74vw"}}
                //   borderRadius={{ xs: "6.60vw", md: "3.29vw" }}
                //   boxShadow={{ xs: "0px 2px 7px rgba(112, 112, 112, 0.16)" }}
                >
                    <Stack alignItems="center" justifyContent="center" >
                    <Button  onClick={handleLogin} variant="contained"  sx={{ display: { xs: 'block', sm: 'block' }, backgroundColor: "#52b202", borderRadius: 5, px: 16 }}>Login</Button>
                    </Stack>
                </Box>
            </Stack>
       </Grid>
      </Grid>
    </Box>

    </> );
}

