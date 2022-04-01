import React from 'react';
import styled from 'styled-components'



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
class CardCarrinho extends React.Component {

  render() {

    const produtosNoCarrinho =this.props.produtosNoCarrinho

    return (
      <>
        <ContainerCarrinho>
        <div> {produtosNoCarrinho.quantidade}x {produtosNoCarrinho.nome} </div>
            <div> R$ {produtosNoCarrinho.preco}</div>
          <div>
          <button onClick={() => this.props.removerProduto(produtosNoCarrinho.id)}>
            Remover
          </button>
          </div>
        </ContainerCarrinho>
      </>

    );
  }

}

export default CardCarrinho;
