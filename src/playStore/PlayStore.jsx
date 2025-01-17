import { Avatar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { Context } from '../Context/ContextProvider';
import { apk, img1, img2, img3, img4, logo } from "../data/photo";
// import { apps, logo } from "../data/photo";

const SimpleDrawer = () => {
  const { isOpen, toggleDrawer } = useContext(Context);
// console.log(isOpen)


  return (
    <Box width={'100%'} mt={2} >


      {/* Drawer Component */}
      <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: '100%', padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
          >
            <Avatar src={logo} alt="header logo" />

            <Stack>
              <Typography  >HDFC Services - Credit Card </Typography>
              <small>HDFC Bank Ltd.</small>
            </Stack>






          </Stack>




          <Stack width={'100%'} mt={2} direction={'row'} justifyContent={'space-around'} >
            {
              arr.map(item => (
                <Stack key={item.title}>
                  <Typography component={'h4'} textAlign={'center'} fontWeight={600} >
                    {item.title}
                  </Typography>
                  <Typography component={'p'} color={'#242422'} >
                    {item.subTitle}
                  </Typography>
                </Stack>
              ))
            }
          </Stack>


          <Box my={2}  >

              <Button component={"a"} href={apk}   variant="contained" fullWidth sx={{ bgcolor: "#01875f", my: 4, ":hover": { bgcolor: '#006043' } }}

              >Download Now</Button>
        
          </Box>




          <Stack>
            <Box sx={{
              display: "flex", overflowX: "scroll", width: "100%", scrollbarWidth: "none", // For Firefox
              "&::-webkit-scrollbar": {
                display: "none", // For Chrome, Safari, and Edge
              },
            }}>
              {images_.map((imgs, index) => (
                <Box
                  key={index}
                  component="img"
                  src={`${imgs.src}?w=164&h=164&fit=crop&auto=format`}
                  alt={imgs.alt}
                  loading="lazy"
                  sx={{
                    width: "190px",
                    height: "350px",
                    marginRight: "8px", // Add spacing between images
                    flexShrink: 0, // Prevent shrinking when scrolling
                  }}
                />
              ))}
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};


const arr = [
  {
    title: " 4.6⭐",
    subTitle: "3.04 reviews",
  },
  {
    title: '50M+',
    subTitle: "Downloads",
  },
  {
    title: "3+",
    subTitle: " Rated for 3+",
  },
]


const images_ = [
  {
    src: img1,
    alt: 'Coding Image',
    id: 1,
  },
  {
    src: img2,
    alt: 'Coding Image',
    id: 2,
  },
  {
    src: img3,
    alt: 'Coding Image',
    id: 3,
  },
  {
    src: img4,
    alt: 'Coding Image',
    id: 4,
  },
  


]

export default SimpleDrawer;
