import React, { useState, useEffect } from "react";
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

import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  isAuth(navigation);

  const [customer, setCustomer] = useState();
  const [user, setUser] = useState();
  const [navigate, setNavigate] = useState("Users");
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user == null) {
      apiUser.get("/api/v1/users/all").then((response) => {
        setUser(response.data);
      });
    }
  }, [user]);

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
            <Image source={Avatar} style={{ width: 60, height: 60 }} />
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
              <BulletText>Ordem</BulletText>
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
