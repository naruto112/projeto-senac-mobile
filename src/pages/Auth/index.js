import React, { useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUser, apiCustomer } from "../../services/apis";
import { Container, ViewTitle, Title } from "./styles";
import InputText from "../../components/Input";
import ButtonNative from "../../components/ButtonNative";

const Auth = ({ navigation }) => {
  const [username, setUsername] = useState("admin@automacao.org.br");
  const [password, setPassword] = useState("password01");
  const [btnLogin, setBtnLogin] = useState("Entrar");
  const [style, setStyle] = useState();

  const handle = () => {
    setBtnLogin("Entrando...");
    setStyle({
      opacity: 0.5,
    });
    apiUser
      .post("auth", {
        username,
        password,
      })
      .catch(() => {
        setStyle({});
        setBtnLogin("Entrar");
      })
      .then((response) => {
        AsyncStorage.setItem("@storage_token", response.data.token);
        apiCustomer.defaults.headers.common = {
          Authorization: response.data.token,
        };
        apiUser.defaults.headers.common = {
          Authorization: response.data.token,
        };

        setStyle({});
        setBtnLogin("Entrar");
        navigation.push("Home");
      });
  };

  return (
    <Container>
      <ViewTitle>
        <Title>Go Life</Title>
        <InputText
          name="Digite o email"
          icon="email"
          style={{ width: 300 }}
          onChangeText={setUsername}
        />
        <InputText
          name="Digite a senha"
          icon="lock"
          password={true}
          onChangeText={setPassword}
        />
        <ButtonNative text={btnLogin} onPress={handle} style={style} />
      </ViewTitle>
    </Container>
  );
};

export default Auth;
