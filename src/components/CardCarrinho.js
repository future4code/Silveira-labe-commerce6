import React from 'react'
import styled from 'styled-components';
const RemoveCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  margin-left: 8px;
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
const Pnome = styled.p`
display: inline-block;
color: 	#87CEEB;
margin-left: 8px;
`
export default class CardCarrinho extends React.Component {
  render() {
    return (
      <div>
          <Pnome>{this.props.itemCarrinho.quantidade}x</Pnome>
          <Pnome>{this.props.itemCarrinho.nome}</Pnome>
          <RemoveCartButton onClick={() => this.props.removerProduto(this.props.itemCarrinho.id)}
          >Remover</RemoveCartButton>
      </div>
    )
  }
}

