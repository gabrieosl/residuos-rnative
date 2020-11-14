import React from "react";
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
  Info,
  TextInfo,
} from "./styles";

const Home: React.FC = ({ navigation }) => {
  return (
    <Container
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
        paddingBottom: "50px",
      }}
    >
      <Title>Conhecendo os RSS</Title>
      <SubTitle>
        Conhecendo melhor os Resíduos de Serviço de Saúde (RSS) e suas
        classificações
      </SubTitle>
      <Image source={AllG} resizeMode="contain" />
      <Content>
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
          <Button onPress={() => navigation.navigate("Segregation")}>
            <ButtonText>Segregação</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Descarte")}>
            <ButtonText>Descarte</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Leis")}>
            <ButtonText>Leis</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Quiz")}>
            <ButtonText>Teste seus</ButtonText>
            <ButtonText>conhecimentos</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Pesquisa")}>
            <ButtonText>O que achou</ButtonText>
            <ButtonText>do app?</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("MaisInfo")}>
            <ButtonText>Mais Info</ButtonText>
          </Button>
        </ButtonsRow>
      </Content>
      {/* <Info>
        <TextInfo>i</TextInfo>
      </Info> */}
    </Container>
  );
};

export default Home;
