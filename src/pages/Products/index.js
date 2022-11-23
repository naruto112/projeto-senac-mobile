import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiProduct } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Select from "../../components/Select";
import isAuth from "../../components/auth";

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
  const options = ["Teste", "Outro"];
  const [companies, setCompanies] = useState();
  const [defaultCompany,setDefaultCompany] = useState();

  useEffect(() => {
    isAuth(navigation);
    
    if (companies == null) {
      apiProduct.get("api/v1/companies/all").then((response) => {
        setCompanies(response.data);
        setDefaultCompany(response.data[1]);
        console.log(defaultCompany);
      });
    }
  });
  
  const handle = () => {
    setBtnCadastrar("Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiProduct
      .header("Authorization", AsyncStorage.getItem("@storage_token"))
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
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ArrowLeft}
            style={{
              width: 30,
              height: 30,
              marginLeft: 40,
            }}
          />
        </TouchableOpacity>
      </View> */}
      <Container style={{ marginTop: 80 }}>
        <ViewTitle>
          <Title>Produtos</Title>
          <InputText name="Id" editable={false} />
          <InputText name="Nome" onChangeText={setProductName} />
          <InputText name="Preco" onChangeText={setProductPrice} />
          <Select data={companies} defaultValue={defaultCompany} setSelected={(val) => setProductManufacturer(val)} placeholder={defaultCompany} />
          <Select data={companies} defaultValue={defaultCompany} setSelected={(val) => setProductManufacturer(val)} placeholder={defaultCompany} />
          <ButtonNative text={btnCadastrar} onPress={handle} />
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Products;
