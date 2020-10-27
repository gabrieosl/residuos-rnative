import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Residue from '../screens/Residue';
import Info from '../screens/Info';
import Survey from '../screens/Survey';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={Residue}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-leaf" color={color} />,
          tabBarLabel: "Tipos Resíduos",
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Survey}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-stats" color={color} />,
          tabBarLabel: "Pesquisa",
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Info}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />,
          tabBarLabel: "Mais info",
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
