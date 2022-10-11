import React from "react";
import { View, Text, ScrollView } from "react-native";
import ButtonNative from "../../components/ButtonNative";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Customers = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <Container>
        <ScrollView>
          <ViewTitle style={{flex:1, flexDirection:"rows"}}>
            <Title>Clientes</Title>
            <InputText name="Id" />
            <InputText name="Nome" />
            <InputText name="Preco" />
            <InputText name="Email" />
            <InputText name="Empresa" />
            <InputText name="Salario" />
            <InputText name="Cidade" />
            <InputText name="Estado" />
            <InputText name="Pais" />
            <InputText name="CEP" />
            <InputText name="Telefone" />
            <ButtonNative text="Cadastrar Cliente" />
          </ViewTitle>
        </ScrollView>
      </Container>
    </View>
  );
};

export default Customers;
