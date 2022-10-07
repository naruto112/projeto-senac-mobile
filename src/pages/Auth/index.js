import React from "react";
import { View } from "react-native";

import { Container, ViewTitle, Title } from "./styles";
import InputText from "../../components/Input";
import ButtonNative from "../../components/ButtonNative";

import { useFonts } from "expo-font";

const Auth = () => {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("../../../assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Italic": require("../../../assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Regular": require("../../../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
