import * as Device from "expo-device";
import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import {
  Container,
  HeaderColor,
  Body,
  Welcome,
  WelcomeText,
  HeaderMain,
  Menu,
  Bullet,
  BulletText,
  Table,
  List,
  AvatarImage,
  Control,
  PlusView,
} from "./styles";
import Avatar from "../../../assets/image/profile.png";
import UserImage from "../../../assets/image/add-user.png";
import CustomerImage from "../../../assets/image/add-customer.png";
import ProductImage from "../../../assets/image/products.png";
import OrderImage from "../../../assets/image/orders.png";
import EditImage from "../../../assets/image/edit.png";
import DeleteImage from "../../../assets/image/trash-bin.png";
import PlusAdd from "../../../assets/image/plus.png";
import isAuth from "../../components/auth";
import { apiCustomer, apiUser, apiProduct } from "../../services/apis";
import Constants from "expo-constants";

import * as Notifications from "expo-notifications";

import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const [customer, setCustomer] = useState();
  const [user, setUser] = useState();
  const [navigate, setNavigate] = useState("Users");
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      token = (await Notifications.getExpoPushTokenAsync()).data;
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  useEffect(() => {
    isAuth(navigation);

    if (user == null) {
      apiUser.get("/api/v1/users/all").then((response) => {
        setUser(response.data);
      });
    }

    registerForPushNotificationsAsync().then((token) => console.log(token));
  }, [user]);

  const handlegoBack = () => {
    AsyncStorage.clear();
    navigation.navigate("SignIn");
  };

  const handleCustomers = () => {
    setLoading(true);
    setUser("");
    setProduct();
    setNavigate("Customers");

    apiCustomer
      .get("/api/v1/customers/all")
      .then((response) => {
        setCustomer(response.data);
      })
      .catch(() => {
        handleCustomers();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUsers = () => {
    setLoading(true);
    setCustomer();
    setProduct();
    setNavigate("Users");

    apiUser
      .get("/api/v1/users/all")
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        handleUsers();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleProducts = () => {
    setLoading(true);
    setCustomer();
    setUser("");
    setNavigate("Products");

    apiProduct
      .get("/api/v1/products/all")
      .then((response) => {
        setLoading(false);
        setProduct(response.data);
      })
      .catch(() => {
        handleProducts();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Container>
        <HeaderColor>
          <HeaderMain>
            <Welcome>
              <WelcomeText>Bem vindo ao sistema</WelcomeText>
            </Welcome>
            <TouchableOpacity onPress={handlegoBack}>
              <Image source={Avatar} style={{ width: 60, height: 60 }} />
            </TouchableOpacity>
          </HeaderMain>
        </HeaderColor>
        <Body>
          <Menu>
            <Bullet>
              <TouchableOpacity onPress={handleUsers}>
                <Image
                  source={UserImage}
                  style={{ width: 50, height: 50, marginBottom: 10 }}
                />
              </TouchableOpacity>
              <BulletText>Usuários</BulletText>
            </Bullet>
            <Bullet>
              <TouchableOpacity onPress={handleCustomers}>
                <Image
                  source={CustomerImage}
                  style={{ width: 50, height: 50, marginBottom: 10 }}
                />
              </TouchableOpacity>
              <BulletText>Clientes</BulletText>
            </Bullet>
            <Bullet>
              <TouchableOpacity onPress={handleProducts}>
                <Image
                  source={ProductImage}
                  style={{ width: 50, height: 50, marginBottom: 10 }}
                />
              </TouchableOpacity>
              <BulletText>Produtos</BulletText>
            </Bullet>
            <Bullet>
              <TouchableOpacity>
                <Image
                  source={OrderImage}
                  style={{ width: 50, height: 50, marginBottom: 10 }}
                />
              </TouchableOpacity>
              <BulletText>Pedidos</BulletText>
            </Bullet>
          </Menu>
        </Body>
        <PlusView>
          <TouchableOpacity onPress={() => navigation.push(navigate)}>
            <Image source={PlusAdd} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </PlusView>
      </Container>
      <Table>
        {loading && <ActivityIndicator size={80} color="#5856d6" />}
        <ScrollView showsVerticalScrollIndicator={false}>
          {user &&
            user.map((u) => (
              <List key={u.id}>
                <AvatarImage>
                  <Image
                    source={UserImage}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 10,
                      borderRadius: 50,
                      backgroundColor: "#E6E6E6",
                      justifyContent: "center",
                      marginRight: 20,
                    }}
                  />
                  <Text>{u.name}</Text>
                </AvatarImage>
                <Control>
                  <Image source={EditImage} style={{ width: 34, height: 34 }} />
                  <Image
                    source={DeleteImage}
                    style={{ width: 30, height: 30 }}
                  />
                </Control>
              </List>
            ))}

          {customer &&
            customer.map((c) => (
              <List key={c.id}>
                <AvatarImage>
                  <Image
                    source={CustomerImage}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 10,
                      borderRadius: 50,
                      backgroundColor: "#E6E6E6",
                      justifyContent: "center",
                      marginRight: 20,
                    }}
                  />
                  <Text>{c.name}</Text>
                </AvatarImage>
                <Control>
                  <Image source={EditImage} style={{ width: 34, height: 34 }} />
                  <Image
                    source={DeleteImage}
                    style={{ width: 30, height: 30 }}
                  />
                </Control>
              </List>
            ))}

          {product &&
            product.map((p) => (
              <List key={p.id}>
                <AvatarImage>
                  <Image
                    source={ProductImage}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 10,
                      borderRadius: 50,
                      backgroundColor: "#E6E6E6",
                      justifyContent: "center",
                      marginRight: 20,
                    }}
                  />
                  <Text>{p.name}</Text>
                </AvatarImage>
                <Control>
                  <Image source={EditImage} style={{ width: 34, height: 34 }} />
                  <Image
                    source={DeleteImage}
                    style={{ width: 30, height: 30 }}
                  />
                </Control>
              </List>
            ))}
        </ScrollView>
      </Table>
    </>
  );
};

export default Home;
