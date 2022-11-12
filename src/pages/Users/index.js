import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiUser } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Users = ({ navigation }) => {
  const [userId, setUserId] = useState();
  const [userName, setUserName] = React.useState();
  const [userUserName, setUserUserName] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [userPasswordConfirm, setPasswordConfirm] = React.useState();
  const [userRoles, setUserRoles] = useState("ROLE_ADMIN");
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Usuário");
  const inputRef = useRef(null);
  const [verifyPass, setVerifyPass] = useState(false);
  const [style, setStyle] = useState();

  const handle = () => {
    if (userPassword !== userPasswordConfirm) {
      setVerifyPass(true);
      return false;
    }

    setBtnCadastrar("Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiUser
      .header(
        "Authorization", AsyncStorage.getItem("@storage_token")
      )
      .put("save", {
        userName,
        userUserName,
        userPassword,
        userRoles,
      })
      .catch(() => {
        setStyle({});
        setBtnCadastrar("Cadastrar Usuário");
      })
      .then((response) => {
        setStyle({});
        setBtnCadastrar("Cadastrar Usuário");
        navigation.push("Home");
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <ViewTitle>
          <Title>Usuários</Title>
          <InputText 
            name="Id"
            onChangeText={setUserId}
          />
          <InputText 
            name="Nome" 
            autoCapitalize={'words'}
            autoFocus={true}
            onChangeText={setUserName}  
          />
          <InputText 
            name="Nome de usuário" 
            onChangeText={setUserUserName}  
          />
          <InputText 
            name="Senha"
            password={true}
            onChangeText={setUserPassword}  
          />
          {verifyPass && (
            <Text>
              Senha incorreta
            </Text>
          )}
          
          <InputText 
            style={{
              color: verifyPass ? "red" : "grey"
            }}
            name="Confirmar Senha" 
            password={true}
            onChangeText={setPasswordConfirm}
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

export default Users;
