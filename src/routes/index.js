import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/Auth";
import Home from "../pages/Home";
import isAuth from "../components/auth";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        {isAuth() ? (
          <AppStack.Screen name="Home" component={Home} />
        ) : (
          <AppStack.Screen name="SignIn" component={SignIn} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
