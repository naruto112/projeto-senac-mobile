import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/Auth";
import Home from "../pages/Home";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Users from "../pages/Users";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="SignIn">
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Customers" component={Customers} />
        <AppStack.Screen name="Products" component={Products} />
        <AppStack.Screen name="Users" component={Users} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
