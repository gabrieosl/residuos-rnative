import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import * as WebBrowser from "expo-web-browser";

import GoBack from "../../components/BackButton";

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
  const handleClick = useCallback(async (link) => {
    await WebBrowser.openBrowserAsync(link);
  }, []);

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
      <GoBack navigation={navigation} />
      <Title>Leis</Title>
      <SubTitle>
        Dentre as regulamentações vigentes que tratam dos procedimentos de
        gerenciamento dos RSS, as mais relevantes sobre os RSS, são as
        Resoluções RDC nº 222 e CONAMA nº 358, a Lei nº 12.305 e as normas da
        ABNT NBR nº 7.500, NBR nº 12.808, NBR nº 12.809 e NBR nº 12.810. No site
        da ABNT o usuário poderá pesquisar mais sobre essas NBR. Clique nos
        botões abaixo para conhecer mais sobre as Resoluções e a Lei. Clique no
        Manual de gerenciamento de RSS da ANVISA para maiores informações sobre
        os RSS. Clique também no manual de Saúde para ficar atualizado sobre
        assuntos ligados aos RSS.
      </SubTitle>
      <Content>
        <ButtonsRow>
          <Button
            onPress={() =>
              handleClick("http://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2018/rdc0222_28_03_2018.pdf")
            }
          >
            <ButtonText>RDC Nº 222</ButtonText>
          </Button>
          <Button
            onPress={() =>
              handleClick("http://www2.mma.gov.br/port/conama/legiabre.cfm?codlegi=462")
            }
          >
            <ButtonText>CONAMA nº 358</ButtonText>
          </Button>
          <Button
            onPress={() =>
              handleClick("http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm")
            }
          >
            <ButtonText>LEI Nº 12.305</ButtonText>
          </Button>
          <Button
            onPress={() =>
              handleClick("https://www.anvisa.gov.br/servicosaude/manuais/manual_gerenciamento_residuos.pdf")
            }
          >
            <ButtonText>MANUAL ANVISA</ButtonText>
          </Button>
          <Button
            onPress={() =>
              handleClick("http://bvsms.saude.gov.br/")
            }
          >
            <ButtonText>BIBLIOTECA VIRTUAL EM SAÚDE</ButtonText>
          </Button>
          <Button
            onPress={() =>
              handleClick("http://www.abnt.org.br/")
            }
          >
            <ButtonText>ABNT</ButtonText>
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
