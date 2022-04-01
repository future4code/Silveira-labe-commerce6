import React from 'react';
import styled from 'styled-components'
import CardCarrinho from './CardCarrinho'


// const ValorTotal = styled.div`
//     display: flex;
//     padding: 10px;
// `
const ContainerCarrinho = styled.div`
    
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px 8px;
    
`



class Carrinho extends React.Component {


  render() {

    const produtosNoCarrinho = this.props.produtosNoCarrinho
      return (
      <>
        <ContainerCarrinho>
        
        {produtosNoCarrinho.map((produto, id) => {
          return (
            <CardCarrinho key={id}
            removerProduto={this.props.removerProduto}
            produtosNoCarrinho={produto}
            />
          )
        })}
        </ContainerCarrinho>
      </>

    );
  }

}

export default Carrinho;
