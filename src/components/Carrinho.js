import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 16px;
    gap: 8px;
    align-content: center;  
    padding: 10px;

`
const ValorTotal = styled.div`
    display: flex;
    padding: 10px;
`
const ContainerCarrinho = styled.div`
    
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 8px;
    height: 90vh;
`


function Carrinho() {
    return (
        <MainContainer>
        <ContainerCarrinho>
        <h3>Carrinho</h3>
        <div>5x Produto <button>Remover</button></div>
        <ValorTotal> <p>Valor Total:</p> </ValorTotal>
      </ContainerCarrinho>
      </MainContainer>
    );
  }
  
  export default Carrinho;
  