import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiUser } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

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
  const {params} = useRoute();
  console.log(params);
  const [userId, setUserId] = useState(params !== undefined ? params.id : "0");
  console.log(userId);
  const [userName, setUserName] = React.useState(params !== undefined ? params.name : "");
  const [userUserName, setUserUserName] = React.useState(params !== undefined ? params.username : "");
  const [userPassword, setUserPassword] = React.useState(params !== undefined ? params.userpass : "");
  const [userPasswordConfirm, setPasswordConfirm] = React.useState(params !== undefined ? params.userpass : "");
  const [userRoles, setUserRoles] = useState("ROLE_ADMIN");
  const [btnCadastrar, setBtnCadastrar] = useState(params !== undefined ? "Alterar Usuário" : "Cadastrar Usuário");
  const inputRef = useRef(null);
  const [verifyPass, setVerifyPass] = useState(false);
  const [borderStyle, setBorderStyle] = useState();
  const [borderStyleUserName, setBorderStyleUserName] = useState();
  const [verifyUserName, setVerifyUserName] = useState(false);
  const [style, setStyle] = useState();
  const [borderStyleUserUserName, setBorderStyleUserUserName] = useState();
  const [verifyUserUserName, setVerifyUserUserName] = useState(false);
  const [verifyValid, setVerifyValid] = useState(false);

  let boolUserName = false;
  let boolPass = false;
  let boolValid = false;
  let boolUserUserName = false;
  let msgReturn = "";

  const handle = () => {
    if (userName === undefined || userName == "") {
      setBorderStyleUserName({
        borderColor: "red",
      });

      setVerifyUserName(true);
      boolUserName = true;
    }
    else {
      setBorderStyleUserName({
        borderColor: "#e5e5e5",
      });

      setVerifyUserName(false);
      boolUserName = false;
    }

    if (userUserName === undefined || userUserName == "") {
      setBorderStyleUserUserName({
        borderColor: "red",
      });

      setVerifyUserUserName(true);
      boolUserUserName = true;
    }
    else {
      setBorderStyleUserUserName({
        borderColor: "#e5e5e5",
      });

      setVerifyUserUserName(false);
      boolUserUserName = false;
    }

    if ((userPassword !== userPasswordConfirm) || (userPassword.length < 10)) {
      setBorderStyle({
        borderColor: "red",
      });

      setVerifyPass(true);

      boolPass = true;
    }
    else {
      setBorderStyle({
        borderColor: "#e5e5e5",
      });

      setVerifyPass(false);

      boolPass = false;
    }

    if (boolUserName === true || boolPass === true || boolUserUserName === true) {
      setVerifyValid(true);
      return false;
    }
    else {
      setVerifyValid(false);
    }

    setBtnCadastrar(params !== undefined ? "Alterando..." : "Cadastrando...");
    setStyle({
      opacity: 0.5,
    });
    apiUser
      .put("api/v1/users/save", {
        id: userId,
        name: userName,
        status: true,
        username: userUserName,
        userpass: userPassword,
        roles: userRoles,
      })
      .catch((e) => {
        console.log(e);
        setStyle({});
        setBtnCadastrar("Erro");
      })
      .then((response) => {
        console.log(response);
        setStyle({});
        Toast.show({
          type: params !== undefined ? 'info' : 'success',
          text1: "Usuário",
          text2: params !== undefined ? "Usuário alterado!" : "Usuário cadastrado!",
        }); 
        
      })
      .finally(() => {
        navigation.goBack();
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ marginTop: 80 }}>
        <ViewTitle>
          <Title>Usuários</Title>
          {verifyValid && <Text style={{"justify-content":"left", color:"red"}}>Não foi possível gravar o usuário:</Text>}
          {verifyUserName && <Text style={{"text-align":"left", color:"red"}}>Informe o nome do usuário</Text>}
          {verifyUserUserName && <Text style={{"justify-content":"left", color:"red"}}>Informe o login do usuário</Text>}
          {verifyPass && <Text style={{"justify-content":"left", color:"red"}}>Digite senha válida (ao menos 10 caracteres)</Text>}
          <InputText
            style={borderStyleUserName}
            name="Nome"
            autoCapitalize={"words"}
            onChangeText={setUserName}
            value={userName}
          />
          <InputText name="Login" onChangeText={setUserUserName} value={userUserName} style={borderStyleUserUserName}/>
          <InputText
            style={borderStyle}
            name="Senha"
            password={true}
            onChangeText={setUserPassword}
            value={userPassword}
          />

          <InputText
            style={borderStyle}
            name="Confirmar Senha"
            password={true}
            onChangeText={setPasswordConfirm}
            value={userPassword}
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
