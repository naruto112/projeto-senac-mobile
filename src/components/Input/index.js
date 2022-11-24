import React, { useEffect } from "react";
import { TextInput, Image, Text } from "react-native";
import { Container } from "./styles";
import { Entypo } from "@expo/vector-icons";


const InputText = (props) => {
  const [text, setText] = React.useState(props.value);
  const [password, setPassword] = React.useState(false);

  function handleCapture(params) {
    props.onChangeText(params);
    setText(params);
  }

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
        editable={props.editable}
        autoFocus={props.autoFocus}
        autoCapitalize={props.autoCapitalize}
        ref={props.ref}
        keyboardType={props.keyboardType}
        onChangeText={(value) => handleCapture(value)}
      />
    </Container>
  );
};

export default InputText;
