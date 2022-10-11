import React from "react";
import { View, Text } from "react-native";
import ButtonNative from "../../components/ButtonNative";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Products = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Produtos</Title>
          <InputText name="Id" />
          <InputText name="Nome" />
          <InputText name="Preco" />
          <InputText name="Fabricante" />
          <InputText name="Fornecedor" />
          <ButtonNative text="Cadastrar Produto" />
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Products;
