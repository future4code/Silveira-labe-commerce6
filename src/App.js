import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro.js';
import Carrinho from './components/Carrinho.js';
import ContainerProdutos from './components/ContainerProdutos.js';

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
const ProdutosContainer = styled.div`
grid-column: 2;
border: 2px solid darkgray;
height: 98vh;
`
// const CarrinhoContainer = styled.div`
// grid-column: 3;
// border: 2px solid darkgray;
// height: 98vh;
// `
export default class App extends React.Component {
  state = {
    minValorDoProduto: "",
    maxValorDoProduto: "",
    pesquisaNomeDoProduto: "",
    produtosNoCarrinho :[
      { id: 1,
        nome: 'Produto 1',
        preco: 10,
        foto: 'https://picsum.photos/200/200?a=4',
        quantidade:1
      },
      {
        id: 2,
        nome: 'Produto 2',
        preco: 100,
        foto: 'https://picsum.photos/200/200?a=5',
        quantidade: 12
      },
      {
        id: 3,
        nome: 'Produto 3',
        preco: 1000,
        foto: 'https://picsum.photos/200/200?a=6',
        quantidade: 5
      }
    ]
  }

  adicionarProdutosCarrinho = () => {
    console.log('Funcionou');
  } 

  retirarProdutosCarrinho = () => {
    console.log('Funcionou');
  } 

  atualizaValorPesquisa = (event) => {//tem que ser arrow function
    this.setState({ pesquisaNomeDoProduto: event.target.value })
  }

  atualizaPrecoMin = (event) => {//tem que ser arrow function
    this.setState({ minValorDoProduto: event.target.value })
  }
  
  atualizaPrecoMax = (event) => {//tem que ser arrow function
    this.setState({ maxValorDoProduto: event.target.value })
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
              nomeDoProduto={this.state.pesquisaNomeDoProduto}
              atualizaValorPesquisa={this.atualizaValorPesquisa}
              atualizaPrecoMin={this.atualizaPrecoMin}
              atualizaPrecoMax={this.atualizaPrecoMax}
            />
          </FiltroContainer>

          <ProdutosContainer>
            <ContainerProdutos
              adicionarProdutosCarrinho={this.adicionarProdutosCarrinho}
              arrayDeProdutos= {this.state.produtosNoCarrinho}
              minValorDoProduto={this.state.minValorDoProduto}
              maxValorDoProduto={this.state.maxValorDoProduto}
              nomeDoProduto={this.state.pesquisaNomeDoProduto}
            />
          </ProdutosContainer>
          
          <Carrinho produto ={this.state.produtosNoCarrinho}/>
          </AppContainer>
      </div>
    )
  }
} 
