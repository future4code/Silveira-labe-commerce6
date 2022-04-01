
import React from 'react'

export default class CardCarrinho extends React.Component {
  render() {
    return (
      <div>
          <p>{this.props.itemCarrinho.quantidade}x</p>
          <p>{this.props.itemCarrinho.nome}</p>
          <button onClick={() => this.props.removerProduto(this.props.itemCarrinho.id)}
          >Remover</button>
      </div>
    )
  }
}

