import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  background-color: #5856d6;
  height: 60px;
  width: 300px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: "RobotoCondensed-Regular";
  font-size: 20px;
`;
