import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
    img {
      width:100%;
    }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`


export default class Card extends React.Component {
  render() {

    const produtos = this.props.produtos

    return (
      <CardContainer>
        <img src={produtos.foto} alt={''} />
        <CardInfo>
          <p>{produtos.nome}</p>
          <p>R$ {produtos.preco},00</p>
          <AddToCartButton onClick={() => this.props.adicionarProdutosCarrinho(produtos.id)} >Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    )
  }     
}

