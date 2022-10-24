import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
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

import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  isAuth(navigation);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
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
            <TouchableOpacity>
              <Image
                source={UserImage}
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
            </TouchableOpacity>
            <BulletText>Usuários</BulletText>
          </Bullet>
          <Bullet>
            <TouchableOpacity>
              <Image
                source={CustomerImage}
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
            </TouchableOpacity>
            <BulletText>Clientes</BulletText>
          </Bullet>
          <Bullet>
            <TouchableOpacity>
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
        <TouchableOpacity>
          <Image source={PlusAdd} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </PlusView>
      <Table>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List>
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
              <Text>Maya Johns</Text>
            </AvatarImage>
            <Control>
              <Image source={EditImage} style={{ width: 34, height: 34 }} />
              <Image source={DeleteImage} style={{ width: 30, height: 30 }} />
            </Control>
          </List>
          <List>
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
              <Text>Maya Johns</Text>
            </AvatarImage>
            <Control>
              <Image source={EditImage} style={{ width: 34, height: 34 }} />
              <Image source={DeleteImage} style={{ width: 30, height: 30 }} />
            </Control>
          </List>
          <List>
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
              <Text>Maya Johns</Text>
            </AvatarImage>
            <Control>
              <Image source={EditImage} style={{ width: 34, height: 34 }} />
              <Image source={DeleteImage} style={{ width: 30, height: 30 }} />
            </Control>
          </List>
          <List>
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
              <Text>Maya Johns</Text>
            </AvatarImage>
            <Control>
              <Image source={EditImage} style={{ width: 34, height: 34 }} />
              <Image source={DeleteImage} style={{ width: 30, height: 30 }} />
            </Control>
          </List>
        </ScrollView>
      </Table>
    </Container>
  );
};

export default Home;
