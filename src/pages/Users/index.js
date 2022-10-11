import React from "react";
import { View, Text } from "react-native";
import ButtonNative from "../../components/ButtonNative";

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Users = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Usuários</Title>
          <InputText name="Id" />
          <InputText name="Nome" />
          <InputText name="Nome de usuário" />
          <InputText name="Senha" />
          <InputText name="Confirmar Senha" />
          <InputText name="Grupos do usuário" />
          <ButtonNative text="Cadastrar Usuário" />
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Users;
