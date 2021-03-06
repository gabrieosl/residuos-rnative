import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native";

import AllG from "../../assets/images/allG.jpg";
import AllD from "../../assets/images/allD.jpg";
import boneco1 from "../../assets/images/boneco1.png";
import boneco2 from "../../assets/images/boneco2.png";
import boneco3 from "../../assets/images/boneco3.png";
import boneco4 from "../../assets/images/boneco4.png";

import {
  Container,
  Title,
  SubTitle,
  Image,
  Button,
  ButtonText,
  Content,
  ImagesRow,
  ButtonsRow,
  ImageBoneco,
} from "./styles";
import GoBack from "../../components/BackButton";

const Home: React.FC = ({ navigation }) => {
  const handleClick = useCallback(async () => {
    await WebBrowser.openBrowserAsync(
      "https://docs.google.com/forms/d/e/1FAIpQLSd15JZh3hNjSMFgrFmuYwgrg3TG3X3R9y1G4Ibmshpkh0bZ3A/viewform?usp=sf_link"
    );
  }, []);
  return (
    <Container>
      <GoBack navigation={navigation} />
      <Title>Pesquisa de satisfação sobre a Usabilidade do App</Title>
      <iframe
        style={{ width: "100%", flex: 1, border: 0 }}
        src="https://pt.surveymonkey.com/r/H6T9WFF"
      />
    </Container>
  );
};

export default Home;
