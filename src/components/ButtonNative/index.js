import React from "react";

import { Button, ButtonText } from "./styles";

const ButtonNative = (props) => {
  return (
    <Button onPress={() => props.onPress(props.value)} style={props.style}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};

export default ButtonNative;
