import React from "react";
import { View, Text, ScrollView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiCustomer } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Customers = ({ navigation }) => {
  const [customerName, setCustomerName] = React.useState();
  const [customerEmail, setCustomerEmail] = React.useState();
  const [customerCompany, setCustomerCompany] = React.useState();
  const [customerSalary, setCustomerSalary] = React.useState();
  const [customerCity, setCustomerCity] = React.useState();
  const [customerState, setCustomerState] = React.useState();
  const [customerCountry, setCustomerCountry] = React.useState();
  const [customerZipCode, setCustomerZipCode] = React.useState();
  const [customerPhoneNumber, setCustomerPhoneNumber] = React.useState();
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Cliente");

  const handle = () => {
    btnCadastrar("Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiCustomer
      .header(
        "Authorization", AsyncStorage.getItem("@storage_token")
      )
      .put("save", {
        customerName,
        customerEmail,
        customerCompany,
        customerSalary,
        customerCity,
        customerState,
        customerCountry,
        customerZipCode,
        customerPhoneNumber,
      })
      .catch(() => {
        setStyle({});
        btnCadastrar("Cadastrar Cliente");
      })
      .then((response) => {
        setStyle({});
        btnCadastrar("Cadastrar Cliente");
        navigation.push("Customers");
      });
  };

  return (
    <View>
      <Container>
        <ViewTitle style={{marginBottom: 0}}>
          <Title>Clientes</Title>
        </ViewTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
            <InputText 
              name="Id"
            />
            <InputText 
              name="Nome" 
              onChangeText={setCustomerName}
            />
            <InputText 
              name="Email" 
              onChangeText={setCustomerEmail}
            />
            <InputText 
              name="Empresa" 
              onChangeText={setCustomerCompany}
            />
            <InputText 
              name="Salario" 
              onChangeText={setCustomerSalary}
            />
            <InputText 
              name="Cidade" 
              onChangeText={setCustomerCity}
            />
            <InputText 
              name="Estado" 
              onChangeText={setCustomerState}
            />
            <InputText 
              name="Pais" 
              onChangeText={setCustomerCountry}
            />
            <InputText 
              name="CEP" 
              onChangeText={setCustomerZipCode}
            />
            <InputText 
              name="Telefone" 
              onChangeText={setCustomerPhoneNumber}
            />
        </ScrollView>
        <View style={{height:110}}>
          <ButtonNative 
            text={btnCadastrar} 
            onPress={handle} 
          />
        </View>
      </Container>
    </View>
  );
};

export default Customers;
