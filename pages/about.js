import ElevationScroll from "../component/minAppbar";
import Footer2 from "../component/footer2";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import {  Stack, Typography, Box } from '@mui/material'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';







export default function About() {
    return(
<>

<ElevationScroll />



<Stack
          px={{ xs: "4.80vw" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          mt={{xs: "10px"}}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
        >
          <Box pl={{md:"2.60vw"}}  sx={{display: {xs: "none", md: "block"} }}
          maxWidth={{ md: "50.54vw" }}  width="100%">
            <Image src="/aboutimg.jpeg" alt="img" width={500} height={450} />
           
          </Box>
          <Box   maxWidth={{ md: "43.54vw" }}>
            <Typography  style={{fontFamily: "Rowdies", fontWeight: "500", color: "#002984"}} mt={10}
             fontSize={{xs:"38px", sm:"60px", md:"3.25vw"}} variant="h1">
          ABOUT US
            </Typography>

            <Typography mt={2}>
            Sterling Asset is a digital asset management company that offers several
            investment products categorized under its Capital & Income Series, digital
             agricultural series and Elite Crypto Series. Of the three, the Elite Crypto
              Series lets you invest in top four-performing crypto assets and gain crypto
               exposure. Under the Elite Crypto Series, you get access to Sterling assets 
               portfolios plans that are analyzed and selected based on their individual
                capacity to maximize returns.
Since 2018, sterling Assets has invested in digital assets, agriculture and blockchain companies,
 providing investors with the full spectrum of exposure to the space.
            </Typography>
           
           

            <Stack
              direction="column"
              my={{ xs: "14px", sm: "22px", md: "2.29vw" }}
           spacing={4}
              flexWrap={"wrap"}
             
              
            >
                <Typography sx={{color: "#002984"}}
                style={{fontFamily: "Rowdies", fontSize: "22px"}}>Our history </Typography>
                <Typography mt={-10}>
                Sterling Assets launched the first cryptocurrency fund in the Uk. when bitcoin was at $172.15 /BTC in 2015.  The firm subsequently launched the first blockchain-focused venture fund.  Sterling Asset co-CIO Joey Krug co-founded Augur, one of the first decentralized applications
                 built on Ethereum.  In 2017, Sterling Assets was the first to offer an early-stage token fund.
                </Typography>
                <Typography sx={{color: "#002984"}}
                style={{fontFamily: "Rowdies", fontSize: "22px"}}>Our funds  </Typography>
                <Typography mt={-10}>
                Our funds provide investors with the full spectrum of exposure to the blockchain space, ranging from illiquid venture capital assets (including early-stage tokens and multi-stage venture capital equity) to more liquid assets like bitcoin and other cryptocurrencies.

Sterling Assets manages $3.8 billion in blockchain-related assets.  Funds are available to accredited investors, with minimums of $100,000 or more.

You can also contact our Capital Formation team directly at our mail .
                </Typography>
                {/* <Typography sx={{color: "#002984"}}
                style={{fontFamily: "Rowdies", fontSize: "22px"}}>Low Cost</Typography>
               
                <Typography>
                Most Of Our Operations Are In Developing Countries. 
                This Allows<br /> Us To Limit Our Costs And Offer A Great Service At A Competitive Price.
                </Typography>
                <Typography sx={{color: "#002984"}}
                style={{fontFamily: "Rowdies", fontSize: "22px"}}>Low Cost</Typography>
                
                <Typography>
                Most Of Our Operations Are In Developing Countries. 
                This Allows<br /> Us To Limit Our Costs And Offer A Great Service At A Competitive Price.
                </Typography> */}
              
            </Stack>
          </Box>
         
        </Stack>

        <Stack
  direction={{xs: "column"}}
  justifyContent="center"
  alignItems="center"
  mt={20}>
    
    <Typography  textAlign="center" variant='h4' sx={{color: "#002984", fontFamily: "Rowdies"}} >Freequently Asked Question </Typography>

   


  </Stack>

  <Stack
          px={{ xs: "4.80vw" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          mt={{xs: "10px"}}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
        >
          <Box pl={{md:"2.60vw"}}  
          maxWidth={{ md: "50.54vw" }}  width="100%">

            <Stack direction="column">


<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}>  what are the risks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sterling Assets are professional in financial management
           and as such poses minimal or zero risk to your invested funds.
            Your money is properly insured and hence, no risk of loss attached.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={6} mb={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}> What are the fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sterling Assets charges zero fee for deposits. we have a fully transparent fee structure and you'll always know exactly what you are paying before making a transaction.

We only charge a 1% fee when you make a sell out or withdraw your investment
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}>When can I make a withdrawal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are no lock-in periods at Sterling Assets,
          so you can sell your investments and withdraw from your account at any time
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={6} mb={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}>What currencies can I use to make Deposits?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can deposit Bitcoin, Ethereum, Litecoin and USDT.

          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}> How long does it take my funds to be allocated into my account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          Crypto deposits usually take around 60minutes to reflect.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}> Is investment limited to special countries?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
No, Sterling Assets investments is open to every individual or company who have access to crypto currency.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
      <Box mt={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}> Can I get loans from Sterling Assets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           

          Partners who have a portfolio with sterling Assets can request for non-interest loans.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
      
      <Box mt={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "300", 
     fontFamily: "Rowdies"}}>  Who can invest?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           

          We accept investments from individuals, companies or institutions
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
      


</Stack>
           
          </Box>
          <Box   maxWidth={{ md: "43.54vw" }}>
            <Image src="/ask.jpeg" alt="img" width={350} height={300} />

            </Box>
            </Stack>





<Footer2 />


</>



    )
}