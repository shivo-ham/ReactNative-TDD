import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Account, Cart, Menu } from "./route";
import { BottomMenu } from "../navigation/bottomMenu/bottomMenu";
import { Colors, Constants } from "../config/appConstants";
import { SafeAreaView } from "react-native-safe-area-context";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
const s = StyleSheet.create({
  rootSaf: { backgroundColor: Colors.black, flex: 1 }
});
const Stack = createNativeStackNavigator();
const App = () => {
  const navigationRef = createNavigationContainerRef();
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={s.rootSaf}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: Constants.animation_fade
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={BottomMenu} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
