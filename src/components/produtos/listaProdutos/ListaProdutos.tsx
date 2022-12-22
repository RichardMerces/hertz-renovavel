import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Button, Typography, Grid, CardMedia, CardActions } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import { useNavigate, useParams } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import BoxButtons from '../boxButtons/BoxButtons';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produtos", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produto.length])

  return (
    <>
      <Grid container direction='row' justifyContent='center' >
        {
          produto.map(produto => (
            <Box m={2} className="pointer" >
              {/* onClick={() => { navigate(`/detalheProduto/${produto.idProduto}`) }} */}
              <Card variant="outlined">
                <CardContent className='imageBoard'>
                  <CardMedia image={require('../imagens/semProduto.png')} component="img" title='produto' className='imageSize' />
                </CardContent>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {produto.nome}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.descricao}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.categoria?.nome}
                  </Typography>
                  <Typography variant="body2" component="p">
                    R${produto.preco}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/cadastrarProdutos/${produto.idProduto}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProdutos/${produto.idProduto}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </Grid>
    </>
  )
}

export default ListaProduto;