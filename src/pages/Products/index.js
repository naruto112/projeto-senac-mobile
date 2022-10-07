import React from "react";
import { View, Text } from "react-native";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

import { useFonts } from "expo-font";

const Products = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Produtos</Title>
          <InputText name="Nome do produto" />
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Products;
