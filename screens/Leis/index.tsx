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
      <Title>Leis</Title>
      <SubTitle>
        Dentre as regulamentações vigentes as mais relevantes sobre os RSS, são as listadas abaixo. 
        Pesquise cada uma delas para conhecer mais sobre os RSS. Pesquise também a Biblioteca Virtual de Saúde para ficar atualizado sobre assuntos ligados aos RSS.

      </SubTitle>
      <Content>
        <ButtonsRow>
          <Button>
            <ButtonText>NBR 12808</ButtonText>
          </Button>
          <Button>
            <ButtonText>NBR 12809</ButtonText>
          </Button>
          <Button>
            <ButtonText>NBR 12810</ButtonText>
          </Button>
          <Button>
            <ButtonText>NBR 7500</ButtonText>
          </Button>
          <Button>
            <ButtonText>RDC nº 222</ButtonText>
          </Button>
          <Button>
            <ButtonText>CONAMA nº 358</ButtonText>
          </Button>
          <Button>
              <ButtonText>Lei nº 12.305</ButtonText>
          </Button>
          <Button>
            <ButtonText>Biblioteca Virutal em Saúde</ButtonText>
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
