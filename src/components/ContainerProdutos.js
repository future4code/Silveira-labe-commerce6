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

export default class ContainerProdutos extends React.Component {
  render() {

    
    return (


      <DivPrincipal>
        <Header>
          <p>Quantidade de produto: 2</p>

          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Descrecente</option>
            </select>
          </label>

        </Header>

        <Grade>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grade>

      </DivPrincipal>
    )
  }
}
