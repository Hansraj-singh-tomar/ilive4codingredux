import React from 'react'
import { Container,Box } from "@mui/material"
import {Routes,Route} from 'react-router-dom'
import {Home} from './Pages/Home'
export const Routing = () => {
  return (
    <Container maxWidth="sm">
        <Box component="main" my={4}>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
            </Routes>
        </Box>
    </Container>
  )
}
