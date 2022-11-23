import styled from "styled-components/native";
import Icons from "react-native-vector-icons/Feather";

export const Container = styled.View`
  height: 60px;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #e5e5e5;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Icons)`
  top: 2px;
`;

export const ViewSelect = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

export const SelectValue = styled.Text`
  color: #4b4b4b;
`;

export const WindowModal = styled.View`
  flex: 1;
  align-items: flex-start;
  border-radius: 4px;
  padding: 20px;
  background: #fff;
  max-height: 200px;
`;

export const ButtonText = styled.Text`
  margin-left: 20px;
  color: #4b4b4b;
`;
