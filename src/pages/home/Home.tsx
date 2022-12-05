import { Grid } from "@mui/material";
import React from "react";
import './Home.css'

function Home(){
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'> 
            <h1>Olá, Mundo!</h1>

            <Grid xs={12} className='imagem'>

            </Grid>

        </Grid>
    );
}

export default Home;