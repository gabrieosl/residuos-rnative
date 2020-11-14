import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Home from "../screens/Home";
import Generators from "../screens/Generators";
import Segregation from "../screens/Segregation";
import Descarte from "../screens/Descarte";
import Residue from "../screens/Residue";
import Info from "../screens/Info";
import Survey from "../screens/Survey";
import Quiz from "../screens/Quiz";
import MaisInfo from "../screens/MaisInfo";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Generators" component={Generators} />
      <Stack.Screen name="Groups" component={Residue} />
      <Stack.Screen name="Segregation" component={Segregation} />
      <Stack.Screen name="Descarte" component={Descarte} />
      <Stack.Screen name="Leis" component={Info} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Pesquisa" component={Survey} />
      <Stack.Screen name="MaisInfo" component={MaisInfo} />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
