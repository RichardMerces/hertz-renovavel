import React from "react";
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import { Button, FormControl, Input, InputAdornment, InputLabel, Toolbar, Typography } from "@material-ui/core";
import SearchIcon  from "@material-ui/icons/Search";


function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            HERTZ
          </Typography>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Login</Button>
          <FormControl>
        <InputLabel></InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
        </Toolbar>

      </AppBar>
    </>
  );
}

export default Navbar;