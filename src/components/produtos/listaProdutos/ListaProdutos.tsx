import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid, CardMedia } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate, useParams } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import BoxButtons from '../boxButtons/BoxButtons';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
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
            <Box m={2} className="pointer" onClick={() => { navigate(`/detalheProduto/${produto.idProduto}`) }} >
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
                <BoxButtons />
              </Card>
            </Box>
          ))
        }
      </Grid>
    </>
  )
}

export default ListaProduto;