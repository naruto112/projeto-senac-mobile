import styled, { css } from "styled-components/native";

export const Container = styled.View`
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
