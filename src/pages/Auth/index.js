import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUser, apiCustomer, apiProduct } from "../../services/apis";
import { Container, ViewTitle, Title } from "./styles";
import InputText from "../../components/Input";
import ButtonNative from "../../components/ButtonNative";

const Auth = ({ navigation }) => {
  const [username, setUsername] = useState("admin@automacao.org.br");
  const [password, setPassword] = useState("password01");
  const [btnLogin, setBtnLogin] = useState("Entrar");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState();

  const handle = () => {
    setLoading(true);
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
        apiProduct.defaults.headers.common = {
          Authorization: response.data.token,
        };

        setStyle({});
        setBtnLogin("Entrar");
        navigation.navigate("Home");
      })
      .catch(() => {
        handle();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <ViewTitle>
        <Title>Go Sales</Title>
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
        {loading && <ActivityIndicator size={80} color="#5856d6" />}
        <ButtonNative text={btnLogin} onPress={handle} style={style} />
      </ViewTitle>
    </Container>
  );
};

export default Auth;
