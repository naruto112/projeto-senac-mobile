import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const ContainerCheck = styled.View`
  width: 300px;
  height: 180px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #e5e5e5;
`;

export const ContainerLabel = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LabelCheck = styled.Text`
  margin-bottom: 10px;
`;

export const WindowModal = styled.View`
  flex: 1;
  margin-bottom: 200px;
  border-radius: 4px;
  padding: 30px;
  max-height: 200px;
`;
export const Button = styled.TouchableOpacity`
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
