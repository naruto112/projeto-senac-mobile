import React from "react";

import { Button, ButtonText } from "./styles";

const ButtonNative = (props) => {
  return (
    <Button onPress={() => {}}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};

export default ButtonNative;
