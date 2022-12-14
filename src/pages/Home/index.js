import * as Device from "expo-device";
import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator, Text, Image, ScrollView, View } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
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
import {
  apiCustomer,
  apiUser,
  apiProduct,
  apiOrder,
} from "../../services/apis";
import * as Notifications from "expo-notifications";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Home = ({ navigation }) => {
  const [customer, setCustomer] = useState();
  const [user, setUser] = useState();
  const [navigate, setNavigate] = useState("Users");
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState();
  const {params} = useRoute();

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();


  useEffect(() => {
    isAuth(navigation);

    if (user == null) {
      apiUser.get("/api/v1/users/all").then((response) => {
        setUser(response.data);
      });
    }

  }, [user]);


  //PUSH NOTIFICATION
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Festa !! ????",
        body: "Venda realiza com sucesso.",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  }

  //********************************************** */
  const handlegoBack = () => {
    AsyncStorage.clear();
    navigation.navigate("SignIn");
  };

  const handleCustomers = () => {
    setLoading(true);
    setUser("");
    setProduct();
    setOrder();
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
    setOrder();
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
    setOrder();
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

  const handleOrders = () => {
    setLoading(true);
    setCustomer();
    setUser("");
    setProduct();
    setNavigate("Orders");

    apiOrder
      .get("/api/v1/orders/all")
      .then((response) => {
        setLoading(false);
        setOrder(response.data);
      })
      .catch(() => {
        handleOrders();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditUser = (id) => {
    apiUser.get("api/v1/users/find-by/id/" + id).then((response) => {
      navigation.push("Users", response.data);
    });
  };

  const handleEditCustomer = (id) => {
    apiCustomer.get("api/v1/customers/find-by/id/" + id).then((response) => {
      navigation.push("Customers", response.data);
    });
  };

  const handleEditProduct = (id) => {
    apiProduct.get("api/v1/products/find-by/id/" + id).then((response) => {
      navigation.push("Products", response.data);
    });
  };

  const handleEditOrder = (id) => {
    apiOrder.get("api/v1/orders/find-by/id/" + id).then((response) => {
      navigation.push("Orders", response.data);
    });
  };

  const handleDeleteUser = (id) => {
    apiUser.delete("api/v1/users/delete-by/id/" + id).then((response) => {
      Toast.show({
        type: "error",
        text1: "Usu??rio",
        text2: "Usu??rio excluido!",
      });

      setUser(user.filter((u) => u.id !== id));
    });
  };

  const handleDeleteCustomer = (id) => {
    apiCustomer
      .delete("api/v1/customers/delete-by/id/" + id)
      .then((response) => {
        Toast.show({
          type: "error",
          text1: "Cliente",
          text2: "Cliente excluido!",
        });

        setCustomer(customer.filter((c) => c.id !== id));
      });
  };

  const handleDeleteProduct = (id) => {
    apiProduct.delete("api/v1/products/delete-by/id/" + id).then((response) => {
      Toast.show({
        type: "error",
        text1: "Produto",
        text2: "Produto excluido!",
      });

      setProduct(product.filter((p) => p.id !== id));
    });
  };

  const handleDeleteOrder = (id) => {
    apiOrder.delete("api/v1/orders/delete-by/id/" + id).then((response) => {
      Toast.show({
        type: "error",
        text1: "Pedido",
        text2: "Pedido excluido!",
      });

      setOrder(order.filter((o) => o.id !== id));
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
              <BulletText>Usu??rios</BulletText>
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
              <TouchableOpacity onPress={handleOrders}>
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
                  <TouchableOpacity onPress={() => handleEditUser(u.id)}>
                    <Image
                      source={EditImage}
                      style={{ width: 34, height: 34 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteUser(u.id)}>
                    <Image
                      source={DeleteImage}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity onPress={() => handleEditCustomer(c.id)}>
                    <Image
                      source={EditImage}
                      style={{ width: 34, height: 34 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteCustomer(c.id)}>
                    <Image
                      source={DeleteImage}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity onPress={() => handleEditProduct(p.id)}>
                    <Image
                      source={EditImage}
                      style={{ width: 34, height: 34 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteProduct(p.id)}>
                    <Image
                      source={DeleteImage}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
                </Control>
              </List>
            ))}

          {order &&
            order.map((o) => (
              <List key={o.id}>
                <AvatarImage>
                  <Image
                    source={OrderImage}
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
                  <Text>{o.customerName}</Text>
                </AvatarImage>
                <Control>
                  <TouchableOpacity onPress={() => handleEditOrder(o.id)}>
                    <Image
                      source={EditImage}
                      style={{ width: 34, height: 34 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteOrder(o.id)}>
                    <Image
                      source={DeleteImage}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
                </Control>
              </List>
            ))}
        </ScrollView>
      </Table>
    </>
  );
};

export default Home;
