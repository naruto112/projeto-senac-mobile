import { AsyncStorage } from "react-native";
import { apiUser } from "../../services/apis";

const Auth = () => {
  const { data } = apiUser.post("auth", {
    username: "admin@automacao.org.br",
    password: "password01",
  });

  // if (data.token) {
  //   // const token = data.token.split(" ");

  //   console.log(data.token);
  //   // AsyncStorage.getItem("token", token);
  // }

  return false;
};

export default Auth;
