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
color: #87CEEB;
input{
    margin-left: 50px;
    width: 100px;
    border-radius: 2px;
    background-color: 	#363636;
    color: 		#00BFFF;
}
input[type=range] {
    -webkit-appearance: none;
    appearance: none;
    display: inline-block;
    width: 10em;
    height: 0.5em;
    position: relative;
    left: 5.7em;
    border-radius: 5px;
    background-color: #363636;
    outline: none;
}
`
const InputNome = styled.div`
display: flex;
font-size: 15px;
margin: 10px;
color:#87CEEB;
input{
    margin-left: 20px;
    width: 100px;
    border-radius: 2px;
    background-color: 	#363636;
    color: 	#87CEEB;
}
`
function Filtro(props) {
  return (
    <div>
      <PrincipalContainer>
        <InputContainer>
          Valor mínimo:
          <input
            type={'number'}
            value={props.minValorDoProduto}
            onChange={props.atualizaPrecoMin}
          />
        </InputContainer>
        <InputContainer>
          <input
            type={'range'}
            min={0}
            max={2000}
            value={props.minValorDoProduto}
            onChange={props.atualizaPrecoMin}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type={'number'}
            value={props.maxValorDoProduto}
            onChange={props.atualizaPrecoMax}
          />
        </InputContainer>
        <InputContainer>
          <input
            type={'range'}
            min={0}
            max={5000}
            value={props.maxValorDoProduto}
            onChange={props.atualizaPrecoMax}
          />
        </InputContainer>
        <InputNome>
          Nome do produto:
          <input
            type={'text'}
            value={props.pesquisaNomeDoProduto}
            onChange={props.atualizaValorPesquisa}
          />
        </InputNome>
      </PrincipalContainer>
    </div>
  )
};
export default Filtro