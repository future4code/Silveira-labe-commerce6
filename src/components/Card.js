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
    return (
      <CardContainer>
        <img src="https://i.picsum.photos/id/386/200/200.jpg?hmac=mPGpmd8a-dSFGBZWTzakrKK9snUfEYI764cWc7zihrg" alt="" />
        <CardInfo>
          <p>Nome do Produto</p>
          <p>R$ 200,00</p>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    )
  }     
}

