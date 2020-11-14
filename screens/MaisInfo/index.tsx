import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import * as WebBrowser from "expo-web-browser";

import uezo from "../../assets/images/uezo.jpg";
import mestrado from "../../assets/images/mestrado.png";
import pwa from "../../assets/images/pwa.png";

import GoBack from "../../components/BackButton";
import {
  Container,
  Title,
  SubTitle,
  LinkButton,
  SubTitle2,
  LinksContainer,
  LinkText,
  Image,
  ImageTitle,
  Font,
  Button,
  ButtonText,
  Content,
  ImagesRow,
  ButtonsRow,
  ImageBoneco,
} from "./styles";

const Home: React.FC = ({ navigation }) => {
  const handleClick = useCallback(async (link) => {
    await WebBrowser.openBrowserAsync(link);
  }, []);

  return (
    <Container>
      <GoBack navigation={navigation} />
      <Title>INFORMAÇÕES SOBRE O APLICATIVO - PWA</Title>
      <SubTitle>
        Este App do tipo Progressive Web App - PWA é resultado da dissertação de
        mestrado do discente Carlos Roberto de Souza Barreto realizada na
        fundação Centro Universitário Estadual da Zona Oeste (UEZO) – Rio de
        Janeiro, sob a orientação da professora Maria Francisca do Nascimento
        Oliveira.
      </SubTitle>
      <LinksContainer>
        <Image source={uezo} resizeMode="contain" />
        <Image source={mestrado} resizeMode="contain" />
        <Image source={pwa} resizeMode="contain" />
      </LinksContainer>

      {/* <Content>
        <ImagesRow>
          <ImageBoneco source={boneco1} resizeMode="contain" />
          <ImageBoneco source={boneco2} resizeMode="contain" flip />
          <ImageBoneco source={boneco3} resizeMode="contain" flip />
          <ImageBoneco source={boneco4} resizeMode="contain" />
        </ImagesRow>
        <ButtonsRow>
          <Button onPress={() => navigation.navigate("Generators")}>
            <ButtonText>Geradores</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Groups")}>
            <ButtonText>Grupos</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Segregação</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Descarte</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Leis</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Quiz</ButtonText>
          </Button>
        </ButtonsRow>
      </Content> */}
    </Container>
  );
};

export default Home;
