import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiCustomer, apiProduct } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Select from "../../components/Select";
import isAuth from "../../components/auth";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Orders = ({ navigation }) => {
  const { params } = useRoute();

  const [productId, setProductId] = useState(
    params !== undefined ? params.id : "0"
  );
  const [productName, setProductName] = useState(
    params !== undefined ? params.name : ""
  );
  const [productPrice, setProductPrice] = useState(
    params !== undefined ? "" + params.price : ""
  );
  const [productManufacturer, setProductManufacturer] = useState(
    params !== undefined ? params.manufacturer : ""
  );
  const [productSupplier, setProductSupplier] = useState(
    params !== undefined ? params.supplier : ""
  );
  const [btnCadastrar, setBtnCadastrar] = useState(
    params !== undefined ? "Alterar Produto" : "Cadastrar Produto"
  );
  const [customers, setCustomers] = useState();

  const [borderStyleProductName, setBorderStyleProductName] = useState();
  const [borderStyleProductPrice, setBorderStyleProductPrice] = useState();
  const [borderStyleProductManufacturer, setBorderStyleProductManufacturer] =
    useState();
  const [borderStyleProductSupplier, setBorderStyleProductSupplier] =
    useState();
  const [style, setStyle] = useState();

  const [verifyProductName, setVerifyProductName] = useState(false);
  const [verifyProductPrice, setVerifyProductPrice] = useState(false);
  const [verifyProductManufacturer, setVerifyProductManufacturer] =
    useState(false);
  const [verifyProductSupplier, setVerifyProductSupplier] = useState(false);
  const [verifyValid, setVerifyValid] = useState(false);

  let boolProductName = false;
  let boolProductPrice = false;
  let boolProductManufacturer = false;
  let boolProductSupplier = false;
  let boolValid = false;
  let msgReturn = "";

  useEffect(() => {
    isAuth(navigation);

    if (customers == null) {
      apiCustomer.get("api/v1/customers/all").then((response) => {
        setCustomers(response.data);
      });
    }
  });

  const handle = () => {
    if (productName === undefined || productName == "") {
      setBorderStyleProductName({
        borderColor: "red",
      });

      setVerifyProductName(true);
      boolProductName = true;
    } else {
      setBorderStyleProductName({
        borderColor: "#e5e5e5",
      });

      setVerifyProductName(false);
      boolProductName = false;
    }

    if (productPrice === undefined || productPrice == "") {
      setBorderStyleProductPrice({
        borderColor: "red",
      });

      setVerifyProductPrice(true);
      boolProductPrice = true;
    } else {
      setBorderStyleProductPrice({
        borderColor: "#e5e5e5",
      });

      setVerifyProductPrice(false);
      boolProductPrice = false;
    }

    if (productManufacturer === undefined || productManufacturer == "") {
      setBorderStyleProductManufacturer({
        borderColor: "red",
      });

      setVerifyProductManufacturer(true);
      boolProductManufacturer = true;
    } else {
      setBorderStyleProductManufacturer({
        borderColor: "#e5e5e5",
      });

      setVerifyProductManufacturer(false);
      boolProductManufacturer = false;
    }

    if (productSupplier === undefined || productSupplier == "") {
      setBorderStyleProductSupplier({
        borderColor: "red",
      });

      setVerifyProductSupplier(true);
      boolProductSupplier = true;
    } else {
      setBorderStyleProductSupplier({
        borderColor: "#e5e5e5",
      });

      setVerifyProductSupplier(false);
      boolProductSupplier = false;
    }

    if (
      boolProductName === true ||
      boolProductPrice === true ||
      boolProductManufacturer === true ||
      boolProductSupplier === true
    ) {
      setVerifyValid(true);
      return false;
    } else {
      setVerifyValid(false);
    }

    setBtnCadastrar(params !== undefined ? "Alterando..." : "Cadastrando...");
    setStyle({
      opacity: 0.5,
    });

    apiProduct
      .put("api/v1/orders/save", {
        id: productId,
        name: productName,
        status: true,
        price: productPrice,
        supplier: productSupplier,
        manufacturer: productManufacturer,
      })
      .catch(() => {
        setStyle({});
        setBtnCadastrar("Erro");
      })
      .then((response) => {
        setStyle({});
        Toast.show({
          type: params !== undefined ? "info" : "success",
          text1: "Produto",
          text2:
            params !== undefined ? "Produto alterado!" : "Produto cadastrado!",
        });
      })
      .finally(() => {
        navigation.navigate("Home", { route: "product" });
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
          <Title>Pedidos</Title>
          {verifyValid && (
            <Text style={{ "justify-content": "left", color: "red" }}>
              Não foi possível gravar o produto:
            </Text>
          )}
          {verifyProductName && (
            <Text style={{ "text-align": "left", color: "red" }}>
              Informe o nome do produto
            </Text>
          )}
          {verifyProductPrice && (
            <Text style={{ "justify-content": "left", color: "red" }}>
              Informe o preço do produto
            </Text>
          )}
          {verifyProductManufacturer && (
            <Text style={{ "justify-content": "left", color: "red" }}>
              Selecione o fabricante do produto
            </Text>
          )}
          {verifyProductSupplier && (
            <Text style={{ "justify-content": "left", color: "red" }}>
              Selecione o fornecedor do produto
            </Text>
          )}
          <InputText
            name="Nome Pedido"
            onChangeText={setProductName}
            value={productName}
            style={borderStyleProductName}
          />
          <Select
            data={customers}
            defaultvalue={productManufacturer}
            setSelected={(val) => setProductManufacturer(val)}
            placeholder={"Fabricante"}
            style={borderStyleProductManufacturer}
          />
          {/* <Select
            data={companies}
            defaultvalue={productManufacturer}
            setSelected={(val) => setProductManufacturer(val)}
            placeholder={"Fabricante"}
            style={borderStyleProductManufacturer}
          />
          <Select
            data={companies}
            defaultvalue={productSupplier}
            setSelected={(val) => setProductSupplier(val)}
            placeholder={"Fornecedor"}
            style={borderStyleProductSupplier}
          /> */}
          <ButtonNative text={btnCadastrar} onPress={handle} />
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Orders;
