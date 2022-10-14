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
        <ViewTitle style={{marginBottom: 0}}>
          <Title>Clientes</Title>
        </ViewTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView>
        <View style={{height:110}}>
          <ButtonNative text="Cadastrar Cliente" />
        </View>
      </Container>
    </View>
  );
};

export default Customers;
