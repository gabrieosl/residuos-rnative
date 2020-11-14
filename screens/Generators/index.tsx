import React from "react";
import { ScrollView } from "react-native";

import AllG from "../../assets/images/allG.jpg";
import AllD from "../../assets/images/allD.jpg";
import boneco1 from "../../assets/images/boneco1.png";
import boneco2 from "../../assets/images/boneco2.png";
import boneco3 from "../../assets/images/boneco3.png";
import boneco4 from "../../assets/images/boneco4.png";

import GoBack from "../../components/BackButton";

import {
  Container,
  Title,
  SubTitle,
  Image,
  Button,
  ItemText,
  Content,
  ImagesRow,
  ButtonsRow,
  ImageBoneco,
} from "./styles";

const Home: React.FC = ({ navigation }) => {
  return (
    <Container>
      <GoBack navigation={navigation} />
      <Title>Geradores de RSS</Title>
      <SubTitle>
        Popularmente chamados de “lixo hospitalar” os RSS são gerados pelos
        estabelecimentos listados abaixo de acordo com a RDC 222/2018
      </SubTitle>
      <Content>
        <ItemText>❯ Assistência domiciliar</ItemText>
        <ItemText>❯ Laboratórios analíticos de produtos para a saúde</ItemText>
        <ItemText>❯ Necrotérios e funerárias </ItemText>
        <ItemText>❯ Estabelecimento de ensino e pesquisa</ItemText>
        <ItemText>❯ Centro de controle de zoonoses</ItemText>
        <ItemText>❯ Distribuidor de produtos farmacêuticos</ItemText>
        <ItemText>
          ❯ Importadores, distribuidores de materiais e controles para
          diagnóstico in vitro
        </ItemText>
        <ItemText>❯ Unidades móveis de atendimento à saúde</ItemText>
      </Content>
    </Container>
  );
};

export default Home;
