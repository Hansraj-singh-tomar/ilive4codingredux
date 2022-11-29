import React from 'react'

import {AppBar,Toolbar,Typography,Grid} from '@mui/material';

import Cart from "../controller/CartController"

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item spacing={10}>
                        <Typography variant='h6' component="h1">
                            Toy Mart
                        </Typography>
                    </Grid>
                    <Grid item spacing={2}>
                        <Cart/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}
