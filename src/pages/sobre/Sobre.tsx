import { Grid } from "@mui/material";
import Avatar from '@material-ui/core/Avatar'
import React from "react";
import './Sobre.css'
import Cards from "../../components/estaticos/cards/Cards";


function Sobre() {
    return (
        <Grid container>
            <Grid item xs={12} paddingX={5}>
                <h1>
                    Sobre nós
                </h1> 
                <p>
                    A  HERTZ é uma empresa de engenharia elétrica que oferece diversas estratégias com base na gestão inteligente da energia elétrica, atuando com responsabilidade e ética profissional e empresarial.
                </p>
                <p>
                    O corpo técnico da empresa é composto por eletricistas, eletrotécnicos e engenheiros, que asseguram conformidade técnica, qualidade e o menor custo de implementação.
                </p>
                <p>
                    A empresa presta assessoria durante todas as etapas de negociação, sendo uma parceira dos clientes que buscam uma relação de confiança e fidelidade.
                </p>
            <h2>Nossa Equipe</h2>
            <Cards />
            </Grid>
        </Grid>
    );
}

export default Sobre;