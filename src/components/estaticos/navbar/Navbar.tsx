import React from "react";
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import { Button, FormControl, Input, InputAdornment, InputLabel, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@mui/material";


function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            HERTZ
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Login</Button>
          <Box display='flex' justifyContent='end'>
            <FormControl>
              <InputLabel></InputLabel>
              <Input
                className="barraPesquisa" id="input-with-icon-adornment" placeholder="Buscar..."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Toolbar>

      </AppBar>
    </>
  );
}

export default Navbar;