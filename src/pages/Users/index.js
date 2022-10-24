import React from "react";
import { View, Text } from "react-native";
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
  const [userName, setUserName] = React.useState();
  const [userUserName, setUserUserName] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [userPasswordConfirm, setPasswordConfirm] = React.useState();
  const [userRoles, setUserRoles] = React.useState();
  const [btnCadastrar, setBtnCadastrar] = useState("Cadastrar Usuário");

  const handle = () => {
    btnCadastrar("Cadastrando...");
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
        btnCadastrar("Cadastrar Usuário");
      })
      .then((response) => {
        setStyle({});
        btnCadastrar("Cadastrar Usuário");
        navigation.push("Users");
      });
  };

  return (
    <View>
      <Container>
        <ViewTitle>
          <Title>Usuários</Title>
          <InputText 
            name="Id"
          />
          <InputText 
            name="Nome" 
            onChangeText={setUserName}  
          />
          <InputText 
            name="Nome de usuário" 
            onChangeText={setUserUserName}  
          />
          <InputText 
            name="Senha" 
            onChangeText={setUserPassword}  
          />
          <InputText 
            name="Confirmar Senha" 
            onChangeText={setPasswordConfirm}  
          />
          <InputText 
            name="Grupos do usuário" 
            onChangeText={setUserRoles}  
          />
          <ButtonNative 
            text={btnCadastrar} 
            onPress={handle} 
          />
        </ViewTitle>
      </Container>
    </View>
  );
};

export default Users;
