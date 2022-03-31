import React from 'react';

import styled from 'styled-components';
import Filtro from './components/Filter';
import ContainerProdutos from './components/ContainerProdutos';
import Carrinho from './components/Carrinho'

import { createGlobalStyle } from 'styled-components'; 
const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
}
`

const AppContainer = styled.div`
display: grid;
grid-template-columns: 300px 1fr 300px;
grid-auto-rows: 1fr;
grid-column-gap: 5px;
background-color: whitesmoke;
margin: 3px;
`
const FiltroContainer = styled.div`
grid-column: 1;
border: 2px solid darkgray;
height: 98vh;
`
const ProdutosContainer = styled.div`
grid-column: 2;
border: 2px solid darkgray;
height: 98vh;
`
const CarrinhoContainer = styled.div`
grid-column: 3;
border: 2px solid darkgray;
height: 98vh;
`
export default class App extends React.Component {
  state = {
    minValorDoProduto: "10",
    maxValorDoProduto: "100000",
    nomeDoProduto: "martelo"
  }
  render() {
    return (
      <div>
        <AppContainer>
          <FiltroContainer>
            <h2>Filtro:</h2>
            <Filtro
              minValorDoProduto={this.state.minValorDoProduto}
              maxValorDoProduto={this.state.maxValorDoProduto}
              nomeDoProduto={this.state.nomeDoProduto}
            />
          </FiltroContainer>
          <ProdutosContainer>
            < ContainerProdutos />
          </ProdutosContainer>
          <CarrinhoContainer>
            <Carrinho />
          </CarrinhoContainer>
        </AppContainer>

        <GlobalStyled />
      </div>
    )
  }
} 
