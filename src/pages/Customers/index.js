import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, SafeAreaView, Text } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiCustomer } from "../../services/apis";
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

const Customers = ({ navigation }) => {
  const {params} = useRoute();

  const [customerId, setCustomerId] = useState(params !== undefined ? params.id : "0");
  const [customerName, setCustomerName] = useState(params !== undefined ? params.name : "");
  const [customerEmail, setCustomerEmail] = useState(params !== undefined ? params.email : "");
  const [customerCompany, setCustomerCompany] = useState(params !== undefined ? params.company : "");
  const [customerSalary, setCustomerSalary] = useState(params !== undefined ? "" + params.salary : "1");
  const [customerCity, setCustomerCity] = useState(params !== undefined ? params.city : "");
  const [customerState, setCustomerState] = useState(params !== undefined ? params.state : "");
  const [customerAddress, setCustomerAddress] = useState(params !== undefined ? params.address : "");
  const [customerCountry, setCustomerCountry] = useState(params !== undefined ? params.country : "");
  const [customerZipCode, setCustomerZipCode] = useState(params !== undefined ? params.zipcode : "");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(params !== undefined ? params.phoneNumber : "");
  const [btnCadastrar, setBtnCadastrar] = useState(params !== undefined ? "Alterar Cliente" : "Cadastrar Cliente");

  const [countries, setCountries] = useState();

  const [borderStyleCustomerName, setBorderStyleCustomerName] = useState();
  const [borderStyleCustomerEmail, setBorderStyleCustomerEmail] = useState();
  const [borderStyleCustomerCompany, setBorderStyleCustomerCompany] = useState();
  const [borderStyleCustomerSalary, setBorderStyleCustomerSalary] = useState();
  const [borderStyleCustomerCity, setBorderStyleCustomerCity] = useState();
  const [borderStyleCustomerState, setBorderStyleCustomerState] = useState();
  const [borderStyleCustomerAddress, setBorderStyleCustomerAddress] = useState();
  const [borderStyleCustomerCountry, setBorderStyleCustomerCountry] = useState();
  const [borderStyleCustomerZipCode, setBorderStyleCustomerZipCode] = useState();
  const [borderStyleCustomerPhoneNumber, setBorderStyleCustomerPhoneNumber] = useState();
  const [style, setStyle] = useState();

  const [verifyCustomerName, setVerifyCustomerName] = useState(false);
  const [verifyCustomerEmail, setVerifyCustomerEmail] = useState(false);
  const [verifyCustomerCompany, setVerifyCustomerCompany] = useState(false);
  const [verifyCustomerSalary, setVerifyCustomerSalary] = useState(false);
  const [verifyCustomerCity, setVerifyCustomerCity] = useState(false);
  const [verifyCustomerState, setVerifyCustomerState] = useState(false);
  const [verifyCustomerAddress, setVerifyCustomerAddress] = useState(false);
  const [verifyCustomerCountry, setVerifyCustomerCountry] = useState(false);
  const [verifyCustomerZipCode, setVerifyCustomerZipCode] = useState(false);
  const [verifyCustomerPhoneNumber, setVerifyCustomerPhoneNumber] = useState(false);
  const [verifyValid, setVerifyValid] = useState(false);

  let boolCustomerName = false;
  let boolCustomerEmail = false;
  let boolCustomerCompany = false;
  let boolCustomerSalary = false;
  let boolCustomerCity = false;
  let boolCustomerState = false;
  let boolCustomerAddress = false;
  let boolCustomerCountry = false;
  let boolCustomerZipCode = false;
  let boolCustomerPhoneNumber = false;
  let boolValid = false;
  let msgReturn = "";

  useEffect(() => {
    isAuth(navigation);
    
    if (countries == null) {
      apiCustomer.get("api/v1/customers/countries/all").then((response) => {
        setCountries(response.data);
      });
    }
  });


  const handle = () => {
    if (customerName === undefined || customerName == "" || (customerName.length < 10)) {
      setBorderStyleCustomerName({
        borderColor: "red",
      });

      setVerifyCustomerName(true);
      boolCustomerName = true;
    }
    else {
      setBorderStyleCustomerName({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerName(false);
      boolCustomerName = false;
    }

    if (customerEmail === undefined || customerEmail == "") {
      setBorderStyleCustomerEmail({
        borderColor: "red",
      });

      setVerifyCustomerEmail(true);
      boolCustomerEmail = true;
    }
    else {
      setBorderStyleCustomerEmail({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerEmail(false);
      boolCustomerEmail = false;
    }

    if (customerCompany === undefined || customerCompany == "") {
      setBorderStyleCustomerCompany({
        borderColor: "red",
      });

      setVerifyCustomerCompany(true);
      boolCustomerCompany = true;
    }
    else {
      setBorderStyleCustomerCompany({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerCompany(false);
      boolCustomerCompany = false;
    }

    if (customerSalary === undefined || customerSalary == "") {
      setBorderStyleCustomerSalary({
        borderColor: "red",
      });

      setVerifyCustomerSalary(true);
      boolCustomerSalary = true;
    }
    else {
      setBorderStyleCustomerSalary({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerSalary(false);
      boolCustomerSalary = false;
    }

    if (customerCity === undefined || customerCity == "") {
      setBorderStyleCustomerCity({
        borderColor: "red",
      });

      setVerifyCustomerCity(true);
      boolCustomerCity = true;
    }
    else {
      setBorderStyleCustomerCity({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerCity(false);
      boolCustomerCity = false;
    }

    if (customerState === undefined || customerState == "") {
      setBorderStyleCustomerState({
        borderColor: "red",
      });

      setVerifyCustomerState(true);
      boolCustomerState = true;
    }
    else {
      setBorderStyleCustomerState({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerState(false);
      boolCustomerState = false;
    }

    if (customerCountry === undefined || customerCountry == "") {
      setBorderStyleCustomerCountry({
        borderColor: "red",
      });

      setVerifyCustomerCountry(true);
      boolCustomerCountry = true;
    }
    else {
      setBorderStyleCustomerCountry({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerCountry(false);
      boolCustomerCountry = false;
    }

    if (customerZipCode === undefined || customerZipCode == "") {
      setBorderStyleCustomerZipCode({
        borderColor: "red",
      });

      setVerifyCustomerZipCode(true);
      boolCustomerZipCode = true;
    }
    else {
      setBorderStyleCustomerZipCode({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerZipCode(false);
      boolCustomerZipCode = false;
    }

    if (customerPhoneNumber === undefined || customerPhoneNumber == "") {
      setBorderStyleCustomerPhoneNumber({
        borderColor: "red",
      });

      setVerifyCustomerPhoneNumber(true);
      boolCustomerPhoneNumber = true;
    }
    else {
      setBorderStyleCustomerPhoneNumber({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerPhoneNumber(false);
      boolCustomerPhoneNumber = false;
    }

    if (customerAddress === undefined || customerAddress == "") {
      setBorderStyleCustomerAddress({
        borderColor: "red",
      });

      setVerifyCustomerAddress(true);
      boolCustomerAddress = true;
    }
    else {
      setBorderStyleCustomerAddress({
        borderColor: "#e5e5e5",
      });

      setVerifyCustomerAddress(false);
      boolCustomerAddress = false;
    }

    if (boolCustomerName === true || boolCustomerEmail === true || boolCustomerCompany === true || boolCustomerSalary === true || boolCustomerCity === true || 
        boolCustomerState === true || boolCustomerCountry === true || boolCustomerZipCode === true || boolCustomerPhoneNumber === true || boolCustomerAddress === true) {
      setVerifyValid(true);
      return false;
    }
    else {
      setVerifyValid(false);
    }

    setBtnCadastrar(params !== undefined ? "Alterando..." : "Cadastrando...");
    setStyle({
      opacity: 0.5,
    });

    apiCustomer
      .put("api/v1/customers/save", {
        id: customerId,
        name: customerName,
        status: true,
        salary: customerSalary,
        address: customerAddress,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        company: customerCompany,
        city: customerCity,
        state: customerState,
        country: customerCountry,
        zipcode: customerZipCode,
      })
      .catch((err) => {
        setStyle({});
        console.log(err);
        setBtnCadastrar("Erro");
      })
      .then((response) => {
        setStyle({});
        Toast.show({
          type: params !== undefined ? 'info' : 'success',
          text1: "Cliente",
          text2: params !== undefined ? "Cliente alterado!" : "Cliente cadastrado!",
        }); 
      })
      .finally(() => {
        navigation.navigate("Home", {route: "customer"});
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
              marginTop: 30,
              marginBottom: 50,
            }}
          />
        </TouchableOpacity>
      </View> */}
      <Container style={{ marginTop: -20, marginBottom: 40 }}>
        <ViewTitle style={{ marginBottom: 0 }}>
          <Title>Clientes</Title>
          {verifyValid && <Text style={{"justify-content":"left", color:"red"}}>Não foi possível gravar o cliente:</Text>}
          {verifyCustomerName && <Text style={{"text-align":"left", color:"red"}}>Informe o nome do cliente (ao menos 10 carac)</Text>}
          {verifyCustomerEmail && <Text style={{"justify-content":"left", color:"red"}}>Informe o email do cliente</Text>}
          {verifyCustomerCompany && <Text style={{"justify-content":"left", color:"red"}}>Informe a empresa</Text>}
          {verifyCustomerSalary && <Text style={{"justify-content":"left", color:"red"}}>Informe o salário</Text>}
          {verifyCustomerCity && <Text style={{"justify-content":"left", color:"red"}}>Informe a cidade</Text>}
          {verifyCustomerState && <Text style={{"justify-content":"left", color:"red"}}>Informe o estado</Text>}
          {verifyCustomerAddress && <Text style={{"justify-content":"left", color:"red"}}>Informe o endereço</Text>}
          {verifyCustomerCountry && <Text style={{"justify-content":"left", color:"red"}}>Informe o país</Text>}
          {verifyCustomerZipCode && <Text style={{"justify-content":"left", color:"red"}}>Informe o cep</Text>}
          {verifyCustomerPhoneNumber && <Text style={{"justify-content":"left", color:"red"}}>Informe o telefone</Text>}
        </ViewTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputText name="Nome" onChangeText={setCustomerName} value={customerName} style={borderStyleCustomerName} />
          <InputText name="Email" onChangeText={setCustomerEmail} keyboardType="email-address" value={customerEmail} style={borderStyleCustomerEmail} />
          <InputText name="Empresa" onChangeText={setCustomerCompany} value={customerCompany} style={borderStyleCustomerCompany} />
          <InputText name="Salario" onChangeText={setCustomerSalary} keyboardType="numbers-and-punctuation" value={customerSalary} style={borderStyleCustomerSalary} />
          <InputText name="Endereço" onChangeText={setCustomerAddress} value={customerAddress} style={borderStyleCustomerAddress} />
          <InputText name="Cidade" onChangeText={setCustomerCity} value={customerCity} style={borderStyleCustomerCity} />
          <InputText name="Estado" onChangeText={setCustomerState} value={customerState} style={borderStyleCustomerState} />
          <Select data={countries} defaultvalue={customerCountry} setSelected={(val) => setCustomerCountry(val)} placeholder={"País"} style={borderStyleCustomerCountry}/>
          <InputText name="CEP" onChangeText={setCustomerZipCode} keyboardType="numbers-and-punctuation" value={customerZipCode} style={borderStyleCustomerZipCode} />
          <InputText name="Telefone" onChangeText={setCustomerPhoneNumber} keyboardType="phone-pad" value={customerPhoneNumber} style={borderStyleCustomerPhoneNumber} />
        </ScrollView>
        <View style={{ height: 110, marginTop: 20 }}>
          <ButtonNative text={btnCadastrar} onPress={handle} />
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Customers;
