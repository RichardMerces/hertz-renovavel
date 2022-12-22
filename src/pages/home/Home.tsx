import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import './Home.css'
import Promo from "./images/promo.png"
import Kit1 from "./images/kit1.jpg"
import Kit2 from "./images/kit2.jpg"
import Bat3 from "./images/bat3.jpg"
import Res from "./images/recesso.jpg"


function Home(){
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'> 
        <img src={Res} alt="" />
  
    <div className="small-container"><br />
      <h2 className="title">Mais Vendidos</h2>
      <div className="row">
        <div className="col-5">
          <a href="product-details.html">
            <img src={Kit1} alt=""
          /></a>
          <h4>Kit Painel Placa Controlador Solar Fotovoltaica 150w Watts</h4>
          <p>R$649,99</p>
        </div>
        <div className="col-4">
          <img src={Kit2} alt="" />
          <h4>Kit Off Grid 1x Painel Solar 280w+ 2x Baterias 70ah+control</h4>
          <p>R$2629,99</p>
        </div>
        <div className="col-5">
          <img src={Bat3} alt="" />
          <h4>Bateria Estacionária Moura Solar 12MS234 (220Ah)</h4>
          <p>R$1799,90</p>
        </div>
      </div>
      
        </div>
        <div className="offer">
      <div className="small-container">
        <div className="row">
        <img src={Promo} className="col-3" alt="" />
            
          
          <div className="col-2 caixa">
            <p>Oferta Exclusiva</p>
            <h1>Placa Painel Modulo Solar 340w por R$749,99</h1>
            <small
              >» Fácil instalação e Excelente eficiência do módulo de até 17,21%
              » Grau de proteção da caixa de junção: IP68
              » Alta eficiência e durabilidade
              
              
            </small>
            <a href="" className="btn">Compre Agora &#8594;</a>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          <div className="col-3 color caixa">
            <i className="fa fa-quote-left"></i>

            <p>
              "Supeeeeeer indico, produtos de otima qualidade e custo beneficio"
            </p>
            <img src="images/user-1.png" alt="" />
            <h3>Henrique da Silva Felipe</h3>
          </div>

          <div className="col-3 color caixa">
            <i className="fa fa-quote-left"></i>

            <p>
              "Muito Top, equipe nota 10"
            </p>
            <img src="images/user-2.png" alt="" />
            <h3>Demetrius Carneiro</h3>
          </div>

          <div className="col-3 color caixa">
            <i className="fa fa-quote-left"></i>
            <p>
              "Enviaram aqui para Curitiba, e chegou bem rápido, super recomendo!!!!"
            </p>
            <div className="rating">
            </div>
            <img src="images/user-3.png" alt="" />
            <h3>Kelly Knoblauch</h3>
          </div>
        </div>
      </div>
    </div>
   

        </Grid>
    );
}

export default Home;