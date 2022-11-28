import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiProduct } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Select from "../../components/Select";
import isAuth from "../../components/auth";
import { useRoute, NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Icon from 'react-native-vector-icons/Foundation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Container,
  ViewTitle,
  Title,
  Button,
  ButtonText,
} from "../Auth/styles";
import InputText from "../../components/Input";

const Tab = createBottomTabNavigator();

const Order = (props) =>
  <View>
    <Text>Pedido</Text>
    <Icon name="clipboard-pencil"size={34} onPress ={() => {
      props.navigation.navigate("Order");
      }} />
  </View>

const Items = (props) =>
  <View>
    <Text>Itens</Text>
    <Icon name="clipboard-pencil" size={34} onPress = {() => {
      props.navigation.navigate("Items");
    }} />
  </View>

const Orders = ({ navigation }) => {
  const {params} = useRoute();
  const [btnCadastrar, setBtnCadastrar] = useState(params !== undefined ? "Alterar Pedido" : "Cadastrar Pedido");

  const screenOption = (objNavigate) => {
    let icone = "clipboard-pencil";

    if (objNavigate.route.name == "Items") {
        icone = "clipboard-pencil";
    }

    return {tabBarIcon: () => <Icon name={icone} size={20} />,
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "blue",
      tabBarLabelStyle: {fontSize: 20, fontWeight: "bold"}
    }
  }

  const handle = () => {
        /*
        if (productName === undefined || productName == "") {
          setBorderStyleProductName({
            borderColor: "red",
          });
    
          setVerifyProductName(true);
          boolProductName = true;
        }
        else {
          setBorderStyleProductName({
            borderColor: "#e5e5e5",
          });
    
          setVerifyProductName(false);
          boolProductName = false;
        }
    
        if (productPrice === undefined || productPrice == "") {
          setBorderStyleProductPrice({
            borderColor: "red",
          });
    
          setVerifyProductPrice(true);
          boolProductPrice = true;
        }
        else {
          setBorderStyleProductPrice({
            borderColor: "#e5e5e5",
          });
    
          setVerifyProductPrice(false);
          boolProductPrice = false;
        }
    
        if (productManufacturer === undefined || productManufacturer == "") {
          setBorderStyleProductManufacturer({
            borderColor: "red",
          });
    
          setVerifyProductManufacturer(true);
          boolProductManufacturer = true;
        }
        else {
          setBorderStyleProductManufacturer({
            borderColor: "#e5e5e5",
          });
    
          setVerifyProductManufacturer(false);
          boolProductManufacturer = false;
        }
    
        if (productSupplier === undefined || productSupplier == "") {
          setBorderStyleProductSupplier({
            borderColor: "red",
          });
    
          setVerifyProductSupplier(true);
          boolProductSupplier = true;
        }
        else {
          setBorderStyleProductSupplier({
            borderColor: "#e5e5e5",
          });
    
          setVerifyProductSupplier(false);
          boolProductSupplier = false;
        }
    
        if (boolProductName === true || boolProductPrice === true || boolProductManufacturer === true || boolProductSupplier === true) {
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
        
        apiProduct
          .put("api/v1/products/save", {
            id: productId,
            name: productName,
            status: true,
            price: productPrice,
            supplier: productSupplier,
            manufacturer: productManufacturer,
          })
          .catch(() => {
            
            setStyle({});
            setBtnCadastrar("Erro");
          })
          .then((response) => {
            
            setStyle({});
            Toast.show({
              type: params !== undefined ? 'info' : 'success',
              text1: "Produto",
              text2: params !== undefined ? "Produto alterado!" : "Produto cadastrado!",
            }); 
          })
          .finally(() => {
            navigation.navigate("Home", {route: "product"});
          });
          */
    };
        
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ marginTop: 80 }}>
        <ViewTitle>
          <Title>Pedidos</Title>
          <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions ={screenOption}>
                <Tab.Screen name="Order" component={Orders}/>
                <Tab.Screen name="Items" component={Items}/>
            </Tab.Navigator>
          </NavigationContainer>
          <ButtonNative text={btnCadastrar} onPress={handle} />
        </ViewTitle>
      </Container>
    </SafeAreaView>
  );
};

export default Orders;
