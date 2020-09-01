import React, {useState} from 'react';
import styled from 'styled-components';
import {Text} from 'react-native'



const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;

`;

const Cabecalho = styled.Text`
  margin-top: 10px;
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #eee;
  border-radius: 10px;
  margin-top: 10px;
  padding: 12px;
`;

const Calcular = styled.Button`
  
`;

const Resultado = styled.Button`
  
`;

const AreaResultado = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const TituloResultado = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ItemResult = styled.Text`
  font-size: 16px;
  margin-bottom: 30px;

`;

export default () => {

  const [conta, alteraconta] = useState("");

  return (
    <Pagina>
      <Cabecalho> Calculadora de gorgeta </Cabecalho>
      <Input 
        placeholder="Quanto deu a conta?" 
        keyboardType="numeric" 
        value={conta} 
        onChangeText={(valor)=> alteraconta(valor)}

      />
      <Calcular title="10%" />

      <Resultado title="Calcular" />

      {conta > 0 &&

      <AreaResultado>
        <TituloResultado>Valor da Conta</TituloResultado>
        <ItemResult>{parseFloat(conta).toFixed(2)}</ItemResult>
        <TituloResultado>Valor da Gorjeta</TituloResultado>
        <ItemResult> R$ {(conta / 10).toFixed(2)}</ItemResult>
        <TituloResultado>Valor Total</TituloResultado>
        <ItemResult>r$ {(conta * 1.1).toFixed(2)}</ItemResult>
      </AreaResultado>
      }
    </Pagina>
  )
}