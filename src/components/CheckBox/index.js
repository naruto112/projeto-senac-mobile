import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, ContainerLabel, LabelCheck } from "./styles";
import PlusAdd from "../../../assets/image/plus.png";

const CheckedBox = (props) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Container>
      <ContainerLabel>
        <LabelCheck>Itens:</LabelCheck>
        <TouchableOpacity onPress={() => navigation.push(navigate)}>
          <Image source={PlusAdd} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </ContainerLabel>

      <ScrollView showsVerticalScrollIndicator={false}>
        {props.data.map((item) => (
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>{item.value}</Text>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CheckedBox;

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
