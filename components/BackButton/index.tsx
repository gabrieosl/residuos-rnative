import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Info, TextInfo } from "./styles";

const BackButton: React.FC = ({ navigation }) => {
  return (
    <Info onPress={() => navigation.navigate("Home")}>
      <Ionicons
        name="ios-arrow-back"
        size={24}
        color="#4e6742"
        style={{ marginRight: "10px" }}
      />
      <TextInfo>Voltar</TextInfo>
    </Info>
  );
};

export default BackButton;
