import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Filtro from './components/Filtro.js';
import Carrinho from './components/Carrinho.js';
import ContainerProdutos from './components/ContainerProdutos.js';

import aerolitoverde from './components/imgs/aerolitoverde.jpg'
import fogueteToy from './components/imgs/foguete-toy.png'
import meteorito from './components/imgs/meteorito.png'
import naveToy from './components/imgs/nave-toy.jpg'
import roupaespacial from './components/imgs/roupaespacial.jpg'
import satelite from './components/imgs/satelite.jpg'
import viagemEspacial from './components/imgs/viagem-espacial.jpg'
import camiseta from './components/imgs/camiseta.png'

const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`

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
background-color: #1C1C1C;
margin: 3px;
height: 100vh;
/* p{
  color: white;
} */
`
const FiltroContainer = styled.div`
grid-column: 1;
border: 2px solid darkgray;
height: 98vh;
background-color: #708090;
h2{
  color:#363636;
}
`
const ProdutosContainer = styled.div`
grid-column: 2;
/* border: 2px solid darkgray; */
height: 98vh;

`

export default class App extends React.Component {
  state = {
    minValorDoProduto: "",
    maxValorDoProduto: "",
    pesquisaNomeDoProduto: "",

    produtosNoCarrinho : [],
    produtos: [

      {
        id: 1,
        nome: 'Aerolito Verde',
        preco: 1500,
        foto: aerolitoverde
      },
      {
        id: 2,
        nome: 'Foguete de Brinquedo',
        preco: 450,
        foto: fogueteToy
      },
      {
        id: 3,
        nome: 'Meteorito',
        preco: 10000,
        foto: meteorito
      },
      {
        id: 4,
        nome: 'Nave de Brinquedo',
        preco: 1200,
        foto: naveToy
      },
      {
        id: 5,
        nome: 'Roupa Espacial',
        preco: 9000,
        foto: roupaespacial
      },
      {
        id: 6,
        nome: 'Satelite',
        preco: 12000,
        foto: satelite
      },
      {
        id: 7,
        nome: 'Viagem Espacial',
        preco: 15000,
        foto: viagemEspacial
      },
      {
        id: 7,
        nome: 'Camiseta Nasa',
        preco: 100,
        foto: camiseta
      }
    ]
  }

  adicionarProdutosCarrinho = (produtoID) => {
    console.log('Funcionou');
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoID === produto.id)

      if (produtoNoCarrinho) {
        const novoCarrinho = this.state.produtosNoCarrinho.map(produto => {
          if (produtoID === produto.id){
            return { ...
              produto, quantidade : produto.quantidade +1 }
        }
        return produto
      })
      this.setState({produtosNoCarrinho: novoCarrinho})
  }  else {
    const produtoParaAdd = this.state.produtos.find(produto => produtoID === produto.id)
    const novoCarrinho = [...this.state.produtosNoCarrinho, {...produtoParaAdd, quantidade:1}]
    this.setState({produtosNoCarrinho:novoCarrinho})}
  } 

    removerProduto = (produtoID) => {
    console.log('funcionou')
    const novoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if (produto.id === produtoID) {
        return {
          ...produto, quantidade: produto.quantidade - 1
        }
      } return produto
    }).filter((produto) => produto.quantidade > 0)
    this.setState({ produtosNoCarrinho: novoCarrinho })
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
              arrayDeProdutos= {this.state.produtos}
              minValorDoProduto={this.state.minValorDoProduto}
              maxValorDoProduto={this.state.maxValorDoProduto}
              nomeDoProduto={this.state.pesquisaNomeDoProduto}
            />
          </ProdutosContainer>
          
          <Carrinho 
            produtosNoCarrinho= {this.state.produtosNoCarrinho}
            removerProduto={this.removerProduto}/>
          </AppContainer>

          {/* <GlobalStyled /> */}
      </div>
    )
  }
} 
