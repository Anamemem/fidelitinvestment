import { Box, Stack, Typography } from "@mui/material"
// import Image from "next/image"
// import logoImg from "../public/logoImg.jpg"


export default function Footer2() {
  return (
    <Box
      mt={{ xs: "20px", sm: "32px", md: "45px" }}
      bgcolor="#424242"
      color="white"
      position={"relative"}
    >
      <Box
        // style={{
        //   backgroundImage: `url('${logoImg.src}')`,
        //   backgroundSize: "cover",
        // }}
      >
        <Stack
          position={"absolute"}
          top={{ xs: "-24px", sm: "-36px", md: "-47px" }}
          width="100%"
          mx="auto"
          // maxWidth={{ xs: "93px", sm: "139px", md: "186px" }}
          alignItems="center"
        >
          {/* <Box
            width={{ xs: "93px", sm: "139px", md: "186px" }}
            border={"12px solid white"}
            bgcolor="#27292D"
            borderRadius={"17px"}
            px={{ xs: "8px", sm: "12px", md: "16px" }}
            py={{ xs: "15px", sm: "23px", md: "30px" }}
          >
            <Box height={{ xs:"16px", sm:"25px", md:"2.64vw" }} maxWidth={{ xs:"59px", sm:"94px", md:"9.86vw" }}>
              <Image
                src={logoImg}
                alt="logo_image"
                layout="responsive"
                width="142"
                height="38"
              />

            </Box>
          </Box> */}
        </Stack>
        <Box
          mt={{ xs: "37px", sm: "56px", md: "75px" }}
          pb={{ xs: "11px", sm: "17px", md: "23px" }}
        >
          <Typography fontSize={{ md:"1.18vw" }} textAlign="center">
            {" "}
            © 2022 Sterling Assets, Inc All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
