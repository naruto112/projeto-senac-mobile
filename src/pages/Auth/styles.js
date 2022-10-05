import styled from "styled-components/native";
import { Platform } from "react-native";
// import { RectButton } from "react-native-gesture-handler";
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

// export const ForgotPassword = styled.TouchableOpacity`
//   margin-top: 45px;
// `;

// export const ForgotPasswordText = styled.Text`
//   text-align: center;
//   color: #6c6c80;
//   font-size: 18px;
//   font-family: "RobotoCondensed-Regular";
// `;

// export const Button = styled(RectButton)`
//   background-color: #0096c7;
//   height: 60px;
//   width: 300px;
//   flex-direction: row;
//   border-radius: 10px;
//   overflow: hidden;
//   align-items: center;
//   margin-top: 8px;
// `;

// export const ButtonIcon = styled.View`
//   height: 60px;
//   width: 60px;
//   background: rgba(0, 0, 0, 0.1);
//   justify-content: center;
//   align-items: center;
// `;

// export const ButtonText = styled.Text`
//   flex: 1;
//   justify-content: center;
//   text-align: center;
//   margin-right: 30px;
//   color: #fff;
//   font-family: "RobotoCondensed-Bold";
//   font-size: 16px;
// `;

// export const CreateAccountButton = styled.TouchableOpacity`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: #0096c7;
//   border-top-width: 1px;
//   border-color: #fff;
//   padding: 16px 0 ${16 + getBottomSpace()}px;

//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
// `;

// export const CreateAccountButtonText = styled.Text`
//   color: #fff;
//   font-size: 18px;
//   font-family: "RobotoCondensed-Bold";
//   margin-left: 16px;
// `;
