import React from "react";
import { TextInput, Image, Text } from "react-native";
import { Container } from "./styles";

const InputText = (props) => {
  const [text, setText] = React.useState("");

  return (
    <Container>
      {props.icon && (
        <Image
          source={props.icon}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
      )}
      <TextInput
        style={{ width: 200 }}
        placeholder={props.name}
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </Container>
  );
};

export default InputText;
