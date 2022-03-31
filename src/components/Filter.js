import React from 'react';
import styled from 'styled-components';
const PrincipalContainer = styled.div`
display: flex;
flex-direction: column;
`
const InputContainer = styled.div`
display: flex;
margin: 10px;
font-size: 15px;
input{
    margin-left: 50px;
    width: 100px;
}
`
const InputNome = styled.div`
display: flex;
font-size: 15px;
margin: 10px;
input{
    margin-left: 20px;
    width: 100px;
}
`
export default class Filtro extends React.Component {
  render() {
    return (
      <div>
        <PrincipalContainer>
          <InputContainer>
            Valor mínimo:
            <input
              type="number"
              value={this.props.minValorDoProduto}
            />
          </InputContainer>
          <InputContainer>
            Valor máximo:
            <input
              type="number"
              value={this.props.maxValorDoProduto}
            />
          </InputContainer>
          <InputNome>
            Nome do produto:
            <input
              type="text"
              value={this.props.nomeDoProduto}
            />
          </InputNome>
        </PrincipalContainer>
      </div>
    );
  };
}; 