import styled from "styled-components/native";
import { Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;

export const ViewTitle = styled.View`
  display: flex;
  align-items: center;
  /*flex-direction: row;
  margin: 124px 0 24px; */
`;

export const Title = styled.Text`
  align-items: center;
  margin-right: 20px;
  font-size: 64px;
  color: #4b4b4b;
  /* font-family: "RobotoCondensed-Bold"; */
`;

export const Button = styled(RectButton)`
  background-color: #0096c7;
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
  /* font-family: "RobotoCondensed-Bold"; */
  font-size: 16px;
`;
