import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Stack, } from '@mui/material';
import { HomeImg } from '../data/photo';


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === HomeImg.length - 1 ? 0 : prevSlide + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <>

            <Stack direction={"row"}


                sx={{
                    paddingTop: { xs: "4.6rem", md: "5.5rem" },
                    background: "linear-gradient(132deg, rgb(255 255 255) 0%, rgb(234, 236, 237) 60%, rgba(234, 236, 237) 83%);"
                }}   >




                <Box height={"100%"} width={"100%"}  >

                    <Slider {...settings} >
                        {HomeImg.map((image, index) => (

                            <Stack key={index} className={`slider-item ${index === currentSlide ? 'active' : ''}`} height={"100%"}

                            >
                                <img
                                    src={image.img}
                                    alt={`slide-${index}`}

                                    style={{ width: '100%', height: "100%", objectFit: 'cover', outline: "none" }}
                                />
                            </Stack>

                        ))}
                    </Slider>
                </Box>


            </Stack>

            {/* <Stack overflow={"hidden"}>
                <motion.img 
                 initial={{
                    y: '100%',
                    opacity: 0,
                    transform: "scale(1.5)"

                }}
                whileInView={{
                    y: '0',
                    opacity: 1,
                    transform: "scale(1)"

                }}
                transition={{ duration: .8, ease: 'easeInOut' }}
            
                src={bh} alt="" />
            </Stack> */}



        </>
    );
};

export default Hero;
