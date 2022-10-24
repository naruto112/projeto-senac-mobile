import React from "react";
import { View, Text } from "react-native";
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
    btnCadastrar("Cadastrando...");
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
        btnCadastrar("Cadastrar Produto");
      })
      .then((response) => {
        setStyle({});
        btnCadastrar("Cadastrar Produto");
        navigation.push("Products");
      });
  };

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Produtos</Title>
          <InputText 
            name="Id"
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
    </View>
  );
};

export default Products;
