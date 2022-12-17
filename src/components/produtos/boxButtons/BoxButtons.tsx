import React from 'react';
import './BoxButtons.css';
import { Button, CardActions } from '@material-ui/core';
import { Box } from '@mui/material';

function BoxButtons() {
    return (
        <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} >
                    <Button variant='contained' className="marginLeft" size='small' color="primary" >
                        Adicionar ao Carrinho
                    </Button>
                </Box>
                <Box mx={1}>
                    <Button variant="contained" size='small' color="default">
                        Compre agora
                    </Button>
                </Box>
            </Box>
        </CardActions>
    )
}

export default BoxButtons;