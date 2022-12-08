import React from "react";
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import { Button, FormControl, Input, InputAdornment, InputLabel, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";


function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();

  function goLogout() {
    setToken('')
    navigate("/login")
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">
            HERTZ
          </Typography>
          <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/sobre" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        
                    </Box>
        </Toolbar>

      </AppBar>
    </>
  );
}

export default Navbar;