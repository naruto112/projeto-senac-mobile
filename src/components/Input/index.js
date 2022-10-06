import React from "react";
import { TextInput, Image } from "react-native";
import { Container } from "./styles";
import { Entypo } from "@expo/vector-icons";

const InputText = (props) => {
  const [text, setText] = React.useState("");

  return (
    <Container>
      {props.icon && (
        // <Image
        //   source={props.icon}
        //   style={{ width: 20, height: 20, marginRight: 10 }}
        // />
        <Entypo
          name={props.icon}
          style={{ marginRight: 10 }}
          size={20}
          color="grey"
        />
      )}
      <TextInput
        style={{ width: 200 }}
        placeholder={props.name}
        pa
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </Container>
  );
};

export default InputText;
