import { Download as DownloadIcon } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../Context/ContextProvider'

const APKDownlode = () => {
    const { isOpen, toggleDrawer } = useContext(Context);
    console.log(isOpen)
    return (
        <Stack bgcolor={"rgba(34,34,60,.9)"} padding={" 3rem 2rem"} width={"100%"} alignItems={"center"}>


            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    direction: "row",
                    bgcolor: "rgba(30,30,200,.9)",
                    padding: "0.7rem 3rem",
                    textTransform: "none",
                    borderRadius: "1rem "
                }} variant="contained" >

                Download Now
                <DownloadIcon />
            </Button>

        </Stack>
    )
}

export default APKDownlode