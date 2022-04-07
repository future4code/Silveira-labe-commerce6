import React from 'react';
import styled from 'styled-components';
import CardCarrinho from './CardCarrinho.js';



// const ValorTotal = styled.div`
//     display: flex;
//     padding: 10px;
// `
const ContainerCarrinho = styled.div`
    
    display: flex;
    flex-direction: column;
    border: 2px solid darkgray;
    padding: 10px 8px;
    background-color: #708090;
    h2{
      color: #363636;
    }
    p{
      color:#87CEEB;
    }
`
class Carrinho extends React.Component {

valorTotalCarrinho = () => {
  let valorTotal = 0
  for (let produto of this.props.produtosNoCarrinho){
    valorTotal = produto.preco * produto.quantidade
  }
  return valorTotal
}
  render() {



    // const produtosNoCarrinho = this.props.produtosNoCarrinho.map((produto) => {
    //   return (

    //     <ContainerCarrinho>
    //       <div> <p>{produto.quantidade}</p>
    //         <p>{produto.nome}</p>
    //         <p>{produto.preco}</p>
    //         <button onClick={() => this.props.removerProduto(this.props.produtosNoCarrinho.id)}>
    //           Remover
    //         </button>
    //       </div>
    //     </ContainerCarrinho>

    //   )
    // })

    return (
      <>
        <ContainerCarrinho>
          <h2>Carrinho:</h2>
          <div>
              {this.props.produtosNoCarrinho.map((produto) => {
                return <CardCarrinho itemCarrinho={produto} removerProduto={this.props.removerProduto} />
              })}
          </div>
          <p>Valor total: R${this.valorTotalCarrinho()},00</p>
 
        </ContainerCarrinho>
      </>

    );
  }

}

export default Carrinho;
