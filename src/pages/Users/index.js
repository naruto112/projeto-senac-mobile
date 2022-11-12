import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView } from "react-native";
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
  const [userId, setUserId] = useState();
  const [userName, setUserName] = React.useState();
  const [userUserName, setUserUserName] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [userPasswordConfirm, setPasswordConfirm] = React.useState();
  const [userRoles, setUserRoles] = useState("ROLE_ADMIN");
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Usuário");
  const inputRef = useRef(null);
  const [verifyPass, setVerifyPass] = useState(false);
  const [borderStyle, setBorderStyle] = useState();
  const [style, setStyle] = useState();

  const handle = () => {
    if (userPassword !== userPasswordConfirm) {
      setBorderStyle({
        borderColor: "red",
      });

      setVerifyPass(true);
      return false;
    }

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
          {verifyPass && <Text>Senha incorreta</Text>}
          <InputText name="Id" onChangeText={setUserId} />
          <InputText
            name="Nome"
            autoCapitalize={"words"}
            autoFocus={true}
            onChangeText={setUserName}
          />
          <InputText name="Nome de usuário" onChangeText={setUserUserName} />
          <InputText
            name="Senha"
            password={true}
            onChangeText={setUserPassword}
          />

          <InputText
            style={borderStyle}
            name="Confirmar Senha"
            password={true}
            onChangeText={setPasswordConfirm}
          />
          <View style={{ marginTop: 20 }}>
            <ButtonNative text={btnCadastrar} onPress={handle} />
          </View>
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Users;
