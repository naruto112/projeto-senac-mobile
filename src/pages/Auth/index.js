import React, { useState } from "react";
import { View } from "react-native";
import { apiUser } from "../../services/apis";
import { Container, ViewTitle, Title } from "./styles";
import InputText from "../../components/Input";
import ButtonNative from "../../components/ButtonNative";

const Auth = () => {
  const [user, setUser] = useState();

  const handle = () => {
    apiUser
      .post("auth", {
        username: "admin@automacao.org.br",
        password: "password01",
      })
      .then((event) => {
        console.log(event);
      });
  };

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Go Life</Title>
          <InputText
            name="Digite o email"
            icon="email"
            style={{ width: 300 }}
          />
          <InputText name="Digite a senha" icon="lock" password={true} />
          <ButtonNative text="Entrar" />
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Auth;
