import React from "react";
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Typography } from "@material-ui/core";


function Navbar(){
    return(
    <>
    <AppBar position="static">
  <Toolbar>
    <Typography variant="h6">
      HERTZ
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    
    </>
    )
}

export default Navbar;