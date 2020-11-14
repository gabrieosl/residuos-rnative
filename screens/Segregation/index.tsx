import React from "react";
import { ScrollView } from "react-native";

import segregacao from "../../assets/images/segregacao.png";

import {
  Container,
  Title,
  SubTitle,
  SubTitle2,
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
import GoBack from "../../components/BackButton";

const Home: React.FC = ({ navigation }) => {
  return (
    <Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        paddingTop: "32px",
      }}
    >
      <GoBack navigation={navigation} />
      <Title>FORMAS DE SEGREGAÇÃO</Title>

      <ImageTitle>Classificação e identificação dos resíduos</ImageTitle>
      <Image source={segregacao} resizeMode="contain" />
      <Font>Fonte: adaptado de CONAMA 358/2005 e RDC N° 222/2018.</Font>

      <SubTitle2>
        ❯Segregação dos RSS é realizada de acordo com as características
        físicas, químicas, biológicas, o seu estado físico e os riscos
        envolvidos.
      </SubTitle2>
      <SubTitle2>
        ❯O RSS do grupo A dever ser colocado no saco de lixo vermelho e após o
        seu tratamento de descontaminação pela autoclave ele deve ser enviado
        para o destino final acondicionado no saco branco.
      </SubTitle2>
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
