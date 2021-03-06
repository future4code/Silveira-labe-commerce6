import React from 'react'
import styled from 'styled-components'


const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
    color: #87CEEB;
  }
`

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color:#363636;
  flex-wrap: wrap;
  width:100%;
  height: 400px;
    :hover{
      background-color: #191970;
    };
`
const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
    :hover {
      background-color: #483D8B;
      color: white;
      box-shadow: 2px 2px 5px 0px #000000;
    };
    :active {
      opacity: 0.7;
    }
`

const Img = styled.img`
  flex-grow: 1;
  width: 100%;
  height: 60%;
`

export default class Card extends React.Component {
  render() {

    const produtos = this.props.produtos

    return (
      <CardContainer>
        <Img src={produtos.foto} alt={''} />
        <CardInfo>
          <p>{produtos.nome}</p>
          <p>R$ {produtos.preco},00</p>
          <AddToCartButton onClick={() => this.props.adicionarProdutosCarrinho(produtos.id)} >Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    )
  }     
}

