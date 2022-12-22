import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastrarCategoria.css';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastrarCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>({
        idCategoria: 0,
        nome: '',
        tipo: '',
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada com sucesso');
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/categorias')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <Grid alignItems='center' xs={10} className="box login-box2">
                <h1>CADASTRAR CATEGORIAS</h1>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={10}>
                        <Grid item xs={5}>
                            <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                            <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth /></Grid>

                        <Grid item xs={5}>
                            <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                            <Button type="submit" variant="contained" color="primary">
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>


        </Container>
    )
}

export default CadastrarCategoria;