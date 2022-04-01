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



class Carrinho extends React.Component {

  render() {


    const produtosNoCarrinho = this.props.produtosNoCarrinho.map((produto) => {
      return (

        <ContainerCarrinho>
         <div> <p>{produto.quantidade}</p>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => this.props.removerProduto(this.props.produtosNoCarrinho.id)}>
            Remover
          </button>
        </div>
        </ContainerCarrinho>

      )
    })

    return (
      <>
        <ContainerCarrinho>
        <h3>Carrinho</h3>
        {produtosNoCarrinho}
        </ContainerCarrinho>
      </>

    );
  }

}

export default Carrinho;
