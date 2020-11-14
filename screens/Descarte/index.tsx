import React from "react";
import { ScrollView } from "react-native";

import segregacao from "../../assets/images/descarte.png";

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
    <Container>
      <GoBack navigation={navigation} />
      <Title>FORMAS DE DESCARTE</Title>
      <SubTitle>
        Identificação dos resíduos de acordo com o local de destino final
      </SubTitle>
      <ImageTitle>Classificação e identificação dos resíduos</ImageTitle>
      <Image source={segregacao} resizeMode="contain" />
      <Font>
        Fonte: Rocha , 2018, Em:
        https://www.slideshare.net/FlvioRocha2/programa-de-gerenciamento-de-resduos-slidos-2018{" "}
      </Font>

      <SubTitle2>
        ❯ Os RSS devem ser separados de acordo com sua classificação, pois cada
        grupo de resíduo deve ser colocado em um recipiente especifico
        aguardando envio para seu destino final.
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
