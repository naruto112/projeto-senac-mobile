import React, { useEffect } from "react";
import { TextInput, Image, Text } from "react-native";
import { Container } from "./styles";
import { Entypo } from "@expo/vector-icons";

const InputText = (props) => {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState(false);

  useEffect(() => {
    props.password && setPassword(true);
  }, [password]);

  return (
    <Container style={props.style}>
      {props.icon && (
        <Entypo
          name={props.icon}
          style={{ marginRight: 10 }}
          size={20}
          color="grey"
        />
      )}
      <TextInput
        placeholder={props.name}
        secureTextEntry={password}
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </Container>
  );
};

export default InputText;
