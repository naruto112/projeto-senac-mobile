import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 0}px;
`;

export const HeaderColor = styled.View`
  background: #5856d6;
  width: 500px;
  height: 300px;
`;

export const HeaderMain = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 140px;
  top: 80px;
  margin-left: 60px;
`;

export const Welcome = styled.View`
  width: 200px;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-family: "Poppins-Regular";
`;

export const Body = styled.View`
  flex: 1;
  margin-top: -110px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Menu = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 380px;
  height: 140px;
  margin: 40px;
  background: #fff;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Bullet = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const BulletText = styled.Text`
  font-size: 12px;
  font-family: "Poppins-Regular";
`;

export const Table = styled.View`
  width: 343px;
  height: 500px;
`;

export const List = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  height: 70px;
`;

export const PlusView = styled.View`
  width: 345px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0px;
`;

export const AvatarImage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Control = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75px;
`;
