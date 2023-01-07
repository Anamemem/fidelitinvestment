import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
// import Image from "next/image";

// import contactImage from "../../../image/contact.png";
import RoundButton from "../component/roundButton";

const inputFields = [
  { label: "NAME", placeHolder: "Your name" },
  { label: "EMAIL", placeHolder: "You email address" },
//   { label: "SUBJECT", placeHolder: "Choose subject" },
//   { label: "COMPANY", placeHolder: "Text here" },
  
];

export default function ContactBanner() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        justifyContent="flex-end"
        alignItems={{xs:"center",sm:"flex-start"}}
        spacing={{ xs: "33px", sm: "53px", md: "5.56vw" }}
      >
        {/* <Box
          width="100%"
          mt={{ xs: "34px", sm: "54px", md: "77px" }}
          pl={{ sm: "87px", md: "124px" }}
          position="relative"
          maxWidth={{ xs: "65.20vw", md: "36.53vw" }}
          textAlign="center"
          height={{ xs: "50.00vw", md: "33.33vw" }}
        >
          <Image src={contactImage} layout="fill" alt="contact_image" />
        </Box> */}
        <Box
          width="100%"
          maxWidth={{ sm: "391px", md: "40.83vw" }}
          p={{ xs: "8px", sm: "13px", md: "1.32vw" }}
        >
          {/* <Typography variant="h2">Get In Touch With Us</Typography> */}
          <Grid
            container
             pl={{ xs: "25px", sm: "39pxs", md: "150px" }}
            rowSpacing={{ xs: "13px", sm: "21px", md: "2.15vw" }}
            columnSpacing={{ xs: "7px", sm: "11px", md: "1.18vw" }}
          >
            {inputFields.map((item) => (
              <Grid key={item.label} item xs={12} sm={6}>
                {/* <Typography
                  fontFamily={"Poppins"}
                  mb={{ xs: "5px", sm: "9px", md: "12px" }}
                >
                  {" "}
                  {item.label}{" "}
                </Typography> */}
                <TextField
                  size="small"
                  InputProps={{
                    height: "34px",
                    style: { fontFamily: "Poppins" },
                  }}
                  fullWidth
                  variant="outlined"
                  placeholder={item.placeHolder}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              {/* <Typography
                fontFamily={"Poppins"}
                mb={{ xs: "5px", sm: "9px", md: "12px" }}
              >
                {" "}
                MESSAGE{" "}
              </Typography> */}
              <TextField
                fullWidth
                multiline
                rows={3}
                InputProps={{ style: { fontFamily: "Poppins" } }}
                variant="outlined"
                placeholder={"Start typing here"}
              />
            </Grid>
            <Grid item xs={12} textAlign={"center"}>
                <Stack  alignItems="flex-start" justifyContent="flex-start" >
              <RoundButton
                variant="contained"
                sx={{ minWidth: { sm: "96px", md: "10.00vw" } }}
              >
                {" "}
                Submit{" "}
              </RoundButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}