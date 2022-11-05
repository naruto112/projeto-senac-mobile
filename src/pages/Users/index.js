import React, { useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiUser } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";
import { TouchableOpacity } from "react-native-gesture-handler";

const Users = ({ navigation }) => {
  const [userName, setUserName] = React.useState();
  const [userUserName, setUserUserName] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [userPasswordConfirm, setPasswordConfirm] = React.useState();
  const [userRoles, setUserRoles] = React.useState();
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Usuário");

  const handle = () => {
    setBtnCadastrar("Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiUser
      .header("Authorization", AsyncStorage.getItem("@storage_token"))
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
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ marginTop: 80 }}>
        <ViewTitle>
          <Title>Usuários</Title>
          <InputText name="Id" />
          <InputText
            name="Nome"
            autoCapitalize={"words"}
            onChangeText={setUserName}
          />
          <InputText name="Nome de usuário" onChangeText={setUserUserName} />
          <InputText name="Senha" onChangeText={setUserPassword} />
          <InputText name="Confirmar Senha" onChangeText={setPasswordConfirm} />
          <InputText name="Grupos do usuário" onChangeText={setUserRoles} />
          <View style={{ marginTop: 20 }}>
            <ButtonNative text={btnCadastrar} onPress={handle} />
          </View>
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Users;
