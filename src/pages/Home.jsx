import { useState } from 'react'
import Header from './Header'
import Hero from '../Components/Hero'
import Loder from '../Components/Loder'
import { Stack } from '@mui/material'
import { heroimg } from '../data/photo'
import APKDownlode from '../Components/APKDownlode'
import SimpleDrawer from '../playStore/PlayStore'

const Home = () => {
    const [iloder, setiloder] = useState(true)

    setTimeout(() => {
        setiloder(false)
    }, 100);

    if (iloder) {
        return (

            <Loder />
        )
    }
    else {

        return (
            <>
                <Header />
                <Hero />

                <APKDownlode />
<SimpleDrawer/>
                <Stack>
                    <img src={heroimg} alt="" />
                </Stack>

            </>

        )
    }

}

export default Home