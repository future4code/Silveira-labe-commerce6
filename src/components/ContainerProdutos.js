import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  `

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
`
const Labelstyled = styled.label`
	color: #87CEEB;
`
const Pstyled = styled.p`
  color: #87CEEB;
`
const SelectStyled = styled.select`
background-color: #363636;
color: #87CEEB;
`

export default class ContainerProdutos extends React.Component {

  state = {
    sort:'decrescente'
  }

  onChangeSort = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  arrayFinalProdutos = () => {
    return this.props.arrayDeProdutos
      .filter((produto) => this.props.maxValorDoProduto ? produto.preco <= this.props.maxValorDoProduto : true)
      .filter((produto) => this.props.minValorDoProduto ? produto.preco >= this.props.minValorDoProduto : true)
      .filter((produto) => this.props.nomeDoProduto ? produto.nome.toLowerCase().includes(this.props.nomeDoProduto.toLowerCase()) : true)
      .sort((a, b) => this.state.sort === 'crescente' ? a.preco - b.preco : b.preco - a.preco)
  }
  
  
  render() {
    
    const arrayDeProdutos = this.arrayFinalProdutos()

    return (
      

      <DivPrincipal>
        <Header>
          <Pstyled>Quantidade de produto: {arrayDeProdutos.length}</Pstyled>

          <Labelstyled>
            Ordenação:
            <SelectStyled value={this.state.sort} onChange={this.onChangeSort} >
              <option value={'crescente'} >Crescente</option>
              <option value={'decrescente'} >Descrecente</option>
            </SelectStyled>
          </Labelstyled>

        </Header>

        <Grade>

        {arrayDeProdutos.map((produtos, id) => {
          return (
            <Card key={id}
              adicionarProdutosCarrinho={this.props.adicionarProdutosCarrinho}
              produtos={produtos}
            />
          )
        })}

          
          
        </Grade>

      </DivPrincipal>
    )
  }
}
