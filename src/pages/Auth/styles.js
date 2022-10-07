import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 0}px;
`;

export const ViewTitle = styled.View`
  display: flex;
  align-items: center;
  margin: 124px 0 240px;
`;

export const Title = styled.Text`
  align-items: center;
  margin-right: 20px;
  margin-bottom: 50px;
  font-size: 64px;
  color: #4b4b4b;
  font-family: "RobotoCondensed-Bold";
`;
