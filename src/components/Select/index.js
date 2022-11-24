import React, { useState } from "react";

import { View, TouchableHighlight, Image } from "react-native";

import {
  Container,
  SelectValue,
  ViewSelect,
  WindowModal,
  ButtonText,
  Icon,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Close from "../../../assets/image/close.png";
import Check from "../../../assets/image/check.png";

const Select = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultvalue, setDefaultValue] = useState("");
  const data = props == undefined ? [] : props.data;

  const handleSetValue = async (value: string) => {
    setDefaultValue(value);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <ViewSelect>
          <SelectValue>{defaultvalue ? defaultvalue : "Preco"}</SelectValue>
          <Icon name={"chevron-down"} size={20} />
        </ViewSelect>
      </TouchableOpacity>
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
          {data && data.map((item) => (
            <TouchableHighlight
              key={item}
              style={{ marginBottom: 10 }}
              underlayColor="#ffffff00"
              onPress={() => {
                handleSetValue(item);
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* <Image source={Check} style={{ width: 15, height: 15 }} /> */}
                <ButtonText>{item}</ButtonText>
              </View>
            </TouchableHighlight>
          ))}
        </WindowModal>
      </Modal>
    </Container>
  );
}

export default Select;  