import React from "react";
import { View } from "react-native";

import { Container, ViewTitle, Title, Button, ButtonText } from "./styles";

import Email from "../../../assets/icons/at-sign.png";
import Lock from "../../../assets/icons/lock.png";

import InputText from "../../components/Input";

const Auth = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Go CRUD</Title>
          <InputText name="Digite o email" icon={Email} />
          <InputText name="Digite a senha" icon={Lock} />
          <Button onPress={() => {}}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Auth;
