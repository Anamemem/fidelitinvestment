import { styled, Button } from "@mui/material";


const RoundButton = styled(Button)(({ variant }) => {
  const style = {
    borderRadius: "20px",
    boxShadow: "none",
  }
  if (variant == "contained") {
    style.background = "#52b202"
    // style.background = "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"
  }
  return style
})


export default RoundButton