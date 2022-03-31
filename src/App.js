import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filter.js';
import Carrinho from './components/Carrinho.js';
// import { createGlobalStyle } from 'styled-components'; 
// const GlobalStyled = createGlobalStyle`
// *{
//     margin: 0;
//     padding: 0;
//     background-color: whitesmoke;
// }
// `
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
// const ProdutosContainer = styled.div`
// grid-column: 2;
// border: 2px solid darkgray;
// height: 98vh;
// `
// const CarrinhoContainer = styled.div`
// grid-column: 3;
// border: 2px solid darkgray;
// height: 98vh;
// `
export default class App extends React.Component {
  state = {
    minValorDoProduto: "",
    maxValorDoProduto: "",
    nomeDoProduto: "",
    produtosNoCarrinho :[
      { id: 1,
        nome: 'Produto 1',
        preco: 10,
        foto: 'https://picsum.photos/200/200?a=4',
        quantidade:1
      }
    ]
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
            {/* <p>Produtos</p> */}
          </ProdutosContainer>
          
          <Carrinho produto ={this.state.produtosNoCarrinho}/>
          </AppContainer>
      </div>
    )
  }
} 
