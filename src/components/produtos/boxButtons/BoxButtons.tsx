import React, { useEffect, useState } from 'react';
import './BoxButtons.css';
import { Button, CardActions } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca, buscaId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


function BoxButtons() {
    
    const { id } = useParams<{id: string}>();
    const [produto, setProduto] = useState<Produto>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      let navigate = useNavigate();
    
    
    async function getProduto() {
        await busca("/produtos", setProduto, {
          headers: {
            'Authorization': token
          }
        })
      }

      useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
              'Authorization': token
            }
          })
        }
    
    return (
        <CardActions>
        <Box display="flex" justifyContent="center" mb={1.5} >

          <Link to={`/cadastrarProdutos/${produto?.idProduto}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" className="marginLeft" size='small' color="primary" >
                atualizar
              </Button>
            </Box>
          </Link>
          <Link to={`/deletarProduto/${produto?.idProduto}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" size='small' color="secondary">
                deletar
              </Button>
            </Box>
          </Link>
        </Box>
      </CardActions>

/*         <CardActions>
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
 */    )
}

export default BoxButtons;