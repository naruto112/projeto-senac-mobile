import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = (navigation) => {
  AsyncStorage.getItem("@storage_token").then((res) => {
    if (!res) navigation.push("SignIn");
  });
};

export default Auth;
