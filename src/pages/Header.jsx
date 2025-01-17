import { Stack } from '@mui/material'
import React from 'react'
import { navimg } from '../data/photo'

const Header = () => {
  return (
   <Stack
   width={"100%"}
   position={"fixed"}
   top={"0"}
   zIndex={100}
   >
<img src={navimg} alt="" />

   </Stack>
  )
}

export default Header