import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiProduct } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Products = ({ navigation }) => {
  const [productName, setProductName] = React.useState();
  const [productPrice, setProductPrice] = React.useState();
  const [productManufacturer, setProductManufacturer] = React.useState();
  const [productSupplier, setProductSupplier] = React.useState();
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Produto");

  const handle = () => {
    setBtnCadastrar("Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiProduct
      .header(
        "Authorization", AsyncStorage.getItem("@storage_token")
      )
      .put("save", {
        productName,
        productPrice,
        productManufacturer,
        productSupplier,
      })
      .catch(() => {
        setStyle({});
        setBtnCadastrar("Cadastrar Produto");
      })
      .then((response) => {
        setStyle({});
        setBtnCadastrar("Cadastrar Produto");
        navigation.push("Home");
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <ViewTitle>
          <Title>Produtos</Title>
          <InputText 
            name="Id"
            editable="false"
          />
          <InputText 
            name="Nome"
            onChangeText={setProductName}  
          />
          <InputText 
            name="Preco" 
            onChangeText={setProductPrice} 
          />
          <InputText 
            name="Fabricante" 
            onChangeText={setProductManufacturer} 
          />
          <InputText 
            name="Fornecedor"
            onChangeText={setProductSupplier}  
          />
          <ButtonNative 
            text={btnCadastrar} 
            onPress={handle} 
          />
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Products;
