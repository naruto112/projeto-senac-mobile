import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from "react-native";
import ButtonNative from "../../components/ButtonNative";
import { apiCustomer, apiProduct, apiOrder } from "../../services/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeft from "../../../assets/image/arrow-left.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Select from "../../components/Select";
import isAuth from "../../components/auth";
import { useRoute } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";
import Toast from "react-native-toast-message";
import Modal from "react-native-modal";
import Close from "../../../assets/image/close.png";
import PlusAdd from "../../../assets/image/plus.png";

import { Container, ViewTitle, Title } from "../Auth/styles";
import InputText from "../../components/Input";
import DateInput from "../../components/Date";
import {
  ContainerCheck,
  ContainerLabel,
  LabelCheck,
  WindowModal,
  Button,
  ButtonText,
} from "./styles";

const Orders = ({ navigation }) => {
  const { params } = useRoute();
  const [isSelected, setSelection] = useState(false);
  const [totalOrder, setTotalOrder] = useState(
    params !== undefined ? params.name : ""
  );
  const [orderName, setOrderName] = useState(
    params !== undefined ? params.name : ""
  );
  const [productName, setProductName] = useState(
    params !== undefined ? params.name : ""
  );
  const [customerList, setCustomerList] = useState(
    params !== undefined ? params.manufacturer : ""
  );
  const [btnCadastrar, setBtnCadastrar] = useState(
    params !== undefined ? "Alterar Pedido" : "Cadastrar Pedido"
  );
  const [customers, setCustomers] = useState();
  const [dateDelivery, setDateDelivery] = useState();
  const [borderStyleProductName, setBorderStyleProductName] = useState();
  const [borderStyleCustomerList, setBorderStyleCustomerList] = useState();
  const [style, setStyle] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [dataItem, setDataItem] = useState([]);

  console.log(dateDelivery);

  useEffect(() => {
    isAuth(navigation);

    if (customers == null) {
      apiCustomer.get("api/v1/customers/all").then((response) => {
        setCustomers(
          response.data.map((item) => {
            return item.name;
          })
        );
      });
    }
  });

  const handleItem = () => {
    setDataItem([
      ...dataItem,
      {
        idProduct: 0,
        productName: productName,
      },
    ]);
    setModalVisible(false);
  };

  const handle = () => {
    setBtnCadastrar(params !== undefined ? "Alterando..." : "Cadastrando...");
    setStyle({
      opacity: 0.5,
    });

    const dateSplit =
      dateDelivery == undefined ? "2021-02-01" : dateDelivery.split("/");

    const data = {
      id: 0,
      name: orderName,
      status: true,
      idCustomer: 0,
      customerName: customerList,
      date: "2022-11-28",
      deliveryDate:
        dateDelivery == undefined
          ? dateSplit
          : `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`,
      total: totalOrder,
      items: dataItem,
    };

    apiOrder
      .put("api/v1/orders/save", {
        id: 0,
        name: orderName,
        status: true,
        idCustomer: 0,
        customerName: customerList,
        date: "2022-11-28",
        deliveryDate:
          dateDelivery == undefined
            ? dateSplit
            : `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`,
        total: totalOrder,
        items: dataItem,
      })
      .catch((err) => {
        setStyle({});
        setBtnCadastrar("Erro");
        console.log(err);
      })
      .then((response) => {
        setStyle({});
        Toast.show({
          type: params !== undefined ? "info" : "success",
          text1: "Produto",
          text2:
            params !== undefined ? "Pedido alterado!" : "Pedido cadastrado!",
        });
      })
      .finally(() => {
        navigation.navigate("Home", { route: "Pedido" });
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ marginTop: 80 }}>
        <ViewTitle>
          <Title>Pedidos</Title>
          <InputText
            name="Nome Pedido"
            onChangeText={setOrderName}
            value={orderName}
            style={borderStyleProductName}
          />
          <Select
            data={customers}
            defaultvalue={customerList}
            setSelected={(val) => setCustomerList(val)}
            placeholder={"Cliente"}
            style={borderStyleCustomerList}
          />
          <DateInput onDateChange={setDateDelivery} />
          <InputText
            name="Total de Pedidos"
            onChangeText={setTotalOrder}
            value={totalOrder}
            style={borderStyleProductName}
          />
          <ContainerCheck>
            <ContainerLabel>
              <LabelCheck>Itens:</LabelCheck>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setProductName("");
                }}
              >
                <Image source={PlusAdd} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            </ContainerLabel>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dataItem.map((item) => (
                <View key={item.productName} style={styles.checkboxContainer}>
                  <Text style={styles.label}>{item.productName}</Text>
                </View>
              ))}
            </ScrollView>
          </ContainerCheck>
          <ButtonNative text={btnCadastrar} onPress={handle} />
        </ViewTitle>
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(!modalVisible)}
        >
          <TouchableHighlight
            underlayColor="#ffffff00"
            style={{ width: "100%", left: 350, bottom: 8 }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Image source={Close} style={{ width: 20, height: 20 }} />
          </TouchableHighlight>
          <WindowModal>
            <InputText
              name="Nome do Produto"
              onChangeText={setProductName}
              value={productName}
            />
            {/* <InputText name="Preço de Produto" />
            <InputText name="Quantidade" /> */}
            <Button onPress={() => handleItem()}>
              <ButtonText>Inserir</ButtonText>
            </Button>
          </WindowModal>
        </Modal>
      </Container>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
