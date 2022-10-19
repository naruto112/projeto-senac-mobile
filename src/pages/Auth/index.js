import React from "react";
import { View } from "react-native";

import { Container, ViewTitle, Title } from "./styles";
import InputText from "../../components/Input";
import ButtonNative from "../../components/ButtonNative";

const Auth = () => {
  const handle = () => {};

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
