import React, { useState } from "react";
import { Text } from "react-native";
import DatePicker from "react-native-datepicker";
import { Container, Label } from "./styles";

const Date = (props) => {
  const [date, setDate] = useState("09-10-2021");
  const [text, setText] = React.useState(props.value);

  function handleCapture(params) {
    props.onDateChange(params);
    setDate(params);
    setText(params);
  }

  return (
    <Container>
      <Label>Data de Entrega</Label>
      <DatePicker
        date={date}
        style={{
          title: {
            textAlign: "left",
            fontSize: 20,
            fontWeight: "bold",
          },
          datePickerStyle: {
            width: 230,
          },
          text: {
            textAlign: "left",
            width: 230,
            fontSize: 16,
            color: "#000",
          },
        }}
        mode="date"
        placeholder="Selecione uma data"
        format="DD/MM/YYYY"
        minDate="01-01-1900"
        maxDate="01-01-2050"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: -5,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            borderColor: "gray",
            alignItems: "flex-start",
            borderWidth: 0,
            borderBottomWidth: 1,
          },
          placeholderText: {
            fontSize: 17,
            color: "gray",
          },
          dateText: {
            fontSize: 17,
          },
        }}
        onDateChange={(date) => handleCapture(date)}
      />
    </Container>
  );
};

export default Date;
